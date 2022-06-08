import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Student, StudentSubject, Subject } from './students.entity';
import {
  UpdateStudentdto,
  DeleteStudentdto,
  SearchStudentdto,
  StudentRegisterdto,
} from './students.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(StudentSubject)
    private readonly studentSubjectRepository: Repository<StudentSubject>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  public async createStudent(studentRegisterdto: StudentRegisterdto) {
    try {
      const student = new Student();
      student.username = studentRegisterdto.username;
      student.email = studentRegisterdto.email;
      student.password = bcrypt.hashSync(`${studentRegisterdto.password}`, 10);

      const rs = await this.studentRepository.save(student);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchStudent(searchStudentdto: SearchStudentdto) {
    const take = searchStudentdto.take || 10;
    const page = searchStudentdto.page || 1;
    const skip = (page - 1) * take;
    const filter = searchStudentdto.name || '';

    try {
      const [result, total] = await this.studentRepository.findAndCount({
        where: { username: ILike(`%${filter}%`) },
        order: { username: 'ASC' },
        take: take,
        skip: skip,
      });

      return {
        data: result,
        count: total,
      };
    } catch (error) {
      throw error;
    }
  }

  public async findOneStudent(filter: any) {
    const { id, username, email } = filter;
    try {
      if (!id) {
        const rs = await this.studentRepository.findOne({
          where: [{ email }, { username }],
        });
        return rs;
      }

      const rs = await this.studentRepository.findOne({ where: { id } });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateStudent(updateStudentdto: UpdateStudentdto) {
    const { id, username, email } = updateStudentdto;
    try {
      const student = await this.studentRepository.findOne({ where: { id } });
      student.email = email;
      student.username = username;

      const rs = await this.studentRepository.save(student);
      return rs;
    } catch (error) {
      throw error;
    }
  }
  public async removeStudent(deleteStudentdto: DeleteStudentdto) {
    try {
      const { id } = deleteStudentdto;

      const rs = await this.studentRepository.delete(id);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
