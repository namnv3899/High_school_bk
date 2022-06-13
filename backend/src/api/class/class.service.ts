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
  TimetableDto,
  AssignClassTeacherDto,
} from './class.dto';
import { Subject } from '../students/students.entity';
import { TeacherService } from '../teacher/teacher.service';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Classroom)
    private readonly classroomRepository: Repository<Classroom>,
    @InjectRepository(ClassSubject)
    private readonly classSubjectRepository: Repository<ClassSubject>,
    @InjectRepository(ClassTeacher)
    private readonly classTeacherRepository: Repository<ClassTeacher>,
    @InjectRepository(Subject)
    private readonly SubjectRepository: Repository<Subject>,
    private readonly teacherService: TeacherService,
  ) {}

  public async createClass(createClassdto: CreateClassdto) {
    try {
      const classroom = new Classroom();
      classroom.id = createClassdto.id;
      classroom.name = createClassdto.name;
      classroom.location = createClassdto.location;
      classroom.startYear = createClassdto.startYear;
      classroom.endYear = createClassdto.endYear;

      const rs = await this.classroomRepository.save(classroom);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async createTimetable(timetableDto: TimetableDto) {
    const classSubject = new ClassSubject();
    const { classId, subjectId } = timetableDto;
    try {
      const subject = await this.SubjectRepository.findOne({
        where: { id: subjectId },
      });
      const classroom = await this.classroomRepository.findOne({
        where: { id: classId },
      });
      classSubject.id = timetableDto.id;
      classSubject.lesson = timetableDto.lesson;
      classSubject.dayOfWeek = timetableDto.dayOfWeek;
      classSubject.sessionOfDay = timetableDto.sessionOfDay;
      classSubject.schoolYear = timetableDto.schoolYear;
      classSubject.semester = timetableDto.semester;
      classSubject.classroom = classroom;
      classSubject.subject = subject;

      const rs = await this.classroomRepository.save(classSubject);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async assignClassTeacher(
    assignClassTeacherDto: AssignClassTeacherDto,
  ) {
    const { classId, teacherId } = assignClassTeacherDto;
    try {
      const classroom = await this.classroomRepository.findOne({
        where: { id: classId },
      });
      const teacher = await this.teacherService.findOneTeacher({
        where: { id: teacherId },
      });

      const classTeacher = new ClassTeacher();
      classTeacher.id = assignClassTeacherDto.id;
      classTeacher.role = assignClassTeacherDto.role;
      classTeacher.schoolYear = assignClassTeacherDto.schoolYear;
      classTeacher.semester = assignClassTeacherDto.semester;
      classTeacher.teacher = teacher;
      classTeacher.classroom = classroom;

      const rs = await this.classTeacherRepository.save(classTeacher);
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
