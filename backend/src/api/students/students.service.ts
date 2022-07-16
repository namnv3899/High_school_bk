import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Student, Subject } from './students.entity';
import {
  UpdateStudentdto,
  DeleteStudentdto,
  SearchStudentdto,
  StudentRegisterdto,
} from './students.dto';
import { ClassService } from '../class/class.service';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    @Inject(forwardRef(() => ClassService))
    private readonly classService: ClassService,
  ) {}

  public async createStudent(studentRegisterdto: StudentRegisterdto) {
    try {
      const classroom = await this.classService.findOneClass({
        id: studentRegisterdto.classId,
      });
      const student = new Student();
      student.username = studentRegisterdto.username;
      student.email = studentRegisterdto.email;
      student.password = bcrypt.hashSync(`${studentRegisterdto.password}`, 10);
      student.name = studentRegisterdto.name;
      student.sex = studentRegisterdto.sex;
      student.dateOfBirth = studentRegisterdto.dateOfBirth;
      student.address = studentRegisterdto.address;
      student.phone = studentRegisterdto.phone;
      student.startStudying = studentRegisterdto.startStudying;
      student.endStudying = studentRegisterdto.endStudying;
      student.fatherName = studentRegisterdto.fatherName;
      student.fatherJob = studentRegisterdto.fatherJob;
      student.fatherPhone = studentRegisterdto.fatherPhone;
      student.fatherDateOfBirth = studentRegisterdto.fatherDateOfBirth;
      student.fatherJobAddress = studentRegisterdto.fatherJobAddress;
      student.motherName = studentRegisterdto.motherName;
      student.motherJob = studentRegisterdto.motherJob;
      student.motherDateOfBirth = studentRegisterdto.motherDateOfBirth;
      student.motherPhone = studentRegisterdto.motherPhone;
      student.classroom = classroom;
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
      const rs = await this.studentRepository.findOne({
        where: [{ email }, { username }, { id }],
      });
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
      student.sex = updateStudentdto.sex;
      student.dateOfBirth = updateStudentdto.dateOfBirth;
      student.address = updateStudentdto.address;
      student.phone = updateStudentdto.phone;
      student.startStudying = updateStudentdto.startStudying;
      student.endStudying = updateStudentdto.endStudying;
      student.fatherName = updateStudentdto.fatherName;
      student.fatherJob = updateStudentdto.fatherJob;
      student.fatherPhone = updateStudentdto.fatherPhone;
      student.fatherDateOfBirth = updateStudentdto.fatherDateOfBirth;
      student.fatherJobAddress = updateStudentdto.fatherJobAddress;
      student.motherName = updateStudentdto.motherName;
      student.motherJob = updateStudentdto.motherJob;
      student.motherDateOfBirth = updateStudentdto.motherDateOfBirth;
      student.motherPhone = updateStudentdto.motherPhone;
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
