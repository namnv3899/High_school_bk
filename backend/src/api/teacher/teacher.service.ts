import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Teacher } from './teacher.entity';
import {
  TeacherRegisterdto,
  SearchTeacherdto,
  UpdateTeacherdto,
  DeleteTeacherdto,
} from './teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  public async createTeacher(teacherRegisterdto: TeacherRegisterdto) {
    try {
      const teacher = new Teacher();
      teacher.username = teacherRegisterdto.username;
      teacher.email = teacherRegisterdto.email;
      teacher.password = bcrypt.hashSync(`$teacherRegisterdto.password}`, 10);
      teacher.address = teacherRegisterdto.address;
      teacher.dateOfBirth = teacherRegisterdto.dateOfBirth;
      teacher.startWorking = teacherRegisterdto.startWorking;
      teacher.endWorking = teacherRegisterdto.endWorking;
      teacher.phone = teacherRegisterdto.phone;
      teacher.id = teacherRegisterdto.id;
      teacher.name = teacherRegisterdto.name;
      teacher.sex = teacherRegisterdto.sex;

      const rs = await this.teacherRepository.save(teacher);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchTeacher(searchTeacherdto: SearchTeacherdto) {
    const take = searchTeacherdto.take || 10;
    const page = searchTeacherdto.page || 1;
    const skip = (page - 1) * take;
    const filter = searchTeacherdto.name || '';

    try {
      const [result, total] = await this.teacherRepository.findAndCount({
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

  public async updateTeacher(updateTeacherdto: UpdateTeacherdto) {
    const { id, username, email } = updateTeacherdto;
    try {
      const teacher = await this.teacherRepository.findOne({ where: { id } });
      teacher.email = email;
      teacher.username = username;

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
