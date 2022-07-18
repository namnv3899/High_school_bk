import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Teacher } from './teacher.entity';
import {
  TeacherRegisterdto,
  SearchTeacherdto,
  DeleteTeacherdto,
} from './teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  public async createTeacher(teacherRegisterdto: TeacherRegisterdto) {
    console.log('teacherRegisterdto:', teacherRegisterdto);
    try {
      const teacher = new Teacher();
      teacher.password = bcrypt.hashSync(`$teacherRegisterdto.password}`, 10);
      teacher.address = teacherRegisterdto.address;
      teacher.username = teacherRegisterdto.username;
      teacher.email = teacherRegisterdto.email;
      teacher.salary = teacherRegisterdto.salary;
      teacher.subject = teacherRegisterdto.subject;
      teacher.dateOfBirth = teacherRegisterdto.dateOfBirth;
      teacher.startWorking = teacherRegisterdto.startWorking;
      teacher.endWorking = teacherRegisterdto.endWorking;
      teacher.phone = teacherRegisterdto.phone;
      teacher.name = teacherRegisterdto.name;
      teacher.sex = teacherRegisterdto.sex;

      const rs = await this.teacherRepository.save(teacher);
      console.log('rs:', rs);

      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchTeacher(searchTeacherdto: SearchTeacherdto) {
    const filter = searchTeacherdto.name || '';

    try {
      const [result, total] = await this.teacherRepository.findAndCount({
        where: { username: ILike(`%${filter}%`) },
        order: { username: 'ASC' },
      });

      return {
        data: result,
        count: total,
      };
    } catch (error) {
      throw error;
    }
  }

  public async findOneTeacher(filter: any) {
    const { id, username, email } = filter;
    try {
      if (!id) {
        const rs = await this.teacherRepository.findOne({
          where: [{ email }, { username }],
        });
        return rs;
      }

      const rs = await this.teacherRepository.findOne({ where: { id } });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateTeacher(updateTeacherdto: any) {
    const { id } = updateTeacherdto;
    try {
      const teacher = await this.teacherRepository.findOne({ where: { id } });

      teacher.address = updateTeacherdto.address;
      teacher.username = updateTeacherdto.username;
      teacher.email = updateTeacherdto.email;
      teacher.password = updateTeacherdto.password;
      teacher.salary = updateTeacherdto.salary;
      teacher.subject = updateTeacherdto.subject;
      teacher.dateOfBirth = updateTeacherdto.dateOfBirth;
      teacher.startWorking = updateTeacherdto.startWorking;
      teacher.endWorking = updateTeacherdto.endWorking;
      teacher.phone = updateTeacherdto.phone;
      teacher.name = updateTeacherdto.name;
      teacher.sex = updateTeacherdto.sex;
      const rs = await this.teacherRepository.save(teacher);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async removeTeacher(deleteTeacherdto: DeleteTeacherdto) {
    try {
      const { id } = deleteTeacherdto;

      const rs = await this.teacherRepository.delete(id);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
