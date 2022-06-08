import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Classroom, ClassSubject, ClassTeacher } from './class.entity';
import {
  UpdateClassdto,
  CreateClassdto,
  GetOneClassdto,
  SearchClassdto,
  DeleteClassdto,
} from './class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Classroom)
    private readonly classroomRepository: Repository<Classroom>,
    @InjectRepository(ClassSubject)
    private readonly classSubjectRepository: Repository<ClassSubject>,
    @InjectRepository(ClassTeacher)
    private readonly classTeacherRepository: Repository<ClassTeacher>,
  ) {}

  public async createClass(createClassdto: CreateClassdto) {
    try {
      const classroom = new Classroom();
      classroom.name = createClassdto.name;
      classroom.id = createClassdto.id;

      const rs = await this.classroomRepository.save(classroom);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchClass(searchClassdto: SearchClassdto) {
    const take = searchClassdto.take || 10;
    const page = searchClassdto.page || 1;
    const skip = (page - 1) * take;
    const filter = searchClassdto.name || '';

    try {
      const [result, total] = await this.classroomRepository.findAndCount({
        where: { name: ILike(`%${filter}%`) },
        order: { name: 'ASC' },
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

  public async findOneClass(getOneClassdto: GetOneClassdto) {
    const { id } = getOneClassdto;
    try {
      if (!id) {
        const rs = await this.classroomRepository.findOne({
          where: { id },
        });
        return rs;
      }

      const rs = await this.classroomRepository.findOne({ where: { id } });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateClass(updateClassdto: UpdateClassdto) {
    const { id, name, location } = updateClassdto;
    try {
      const classrom = await this.classroomRepository.findOne({
        where: { id },
      });
      classrom.name = name;
      classrom.location = location;

      const rs = await this.classroomRepository.save(classrom);
      return rs;
    } catch (error) {
      throw error;
    }
  }
  public async removeClass(deleteClassdto: DeleteClassdto) {
    try {
      const { id } = deleteClassdto;

      const rs = await this.classroomRepository.delete(id);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
