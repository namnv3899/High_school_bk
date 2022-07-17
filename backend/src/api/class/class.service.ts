import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Classroom, ClassSubject, ClassTeacher } from './class.entity';
import {
  CreateClassdto,
  GetOneClassdto,
  SearchClassdto,
  DeleteClassdto,
  AssignClassTeacherDto,
  TimetableDto,
  GetClassTeacherDto,
  UpdateTimetableParam,
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
    console.log('timetableDto:', timetableDto);
    const data = [
      timetableDto.toanHoc,
      timetableDto.nguVan,
      timetableDto.ngoaiNgu,
      timetableDto.sinhHoc,
      timetableDto.lichSu,
      timetableDto.diaLy,
      timetableDto.gdcd,
      timetableDto.theDuc,
      timetableDto.vatLy,
      timetableDto.hoaHoc,
      timetableDto.tinHoc,
      timetableDto.congNghe,
      timetableDto.dgqp,
    ];
    // console.log('data:', data);

    let result: any = [];
    try {
      for (const index of data) {
        // console.log('INsexfd:', index);
        const classSubject = new ClassSubject();
        const classroom = await this.classroomRepository.findOne({
          where: { id: index.classId },
        });
        const subject = await this.SubjectRepository.findOne({
          where: { id: index.subjectId },
        });
        classSubject.nameSubject = subject.name;
        classSubject.lesson = index.lesson;
        classSubject.classId = index.classId;
        classSubject.dayOfWeek = index.dayOfWeek;
        classSubject.schoolYear = index.schoolYear;
        classSubject.semester = index.semester;
        classSubject.classroom = classroom;
        classSubject.subject = subject;
        const rs = await this.classSubjectRepository.save(classSubject);
        // console.log('rs:', rs);

        result = await result.concat(rs);
      }
      // console.log('result:', result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getTimetable(data: any) {
    const { classId } = data;
    const classTeacher = await this.classSubjectRepository.find({
      where: { classId },
    });
    return classTeacher;
  }

  public async assignClassTeacher(
    assignClassTeacherDto: AssignClassTeacherDto,
  ) {
    // console.log('timetableDto:', assignClassTeacherDto);
    const data = [
      assignClassTeacherDto.toanHoc,
      assignClassTeacherDto.nguVan,
      assignClassTeacherDto.ngoaiNgu,
      assignClassTeacherDto.sinhHoc,
      assignClassTeacherDto.lichSu,
      assignClassTeacherDto.diaLy,
      assignClassTeacherDto.gdcd,
      assignClassTeacherDto.theDuc,
      assignClassTeacherDto.vatLy,
      assignClassTeacherDto.hoaHoc,
      assignClassTeacherDto.tinHoc,
      assignClassTeacherDto.congNghe,
      assignClassTeacherDto.dgqp,
    ];
    // console.log('data:', data);

    let result: any = [];
    try {
      for (const index of data) {
        // console.log('INsexfd:', index);
        const classTeacher = new ClassTeacher();
        const classroom = await this.classroomRepository.findOne({
          where: { id: index.classId },
        });
        console.log('classroom:', classroom);

        const teacher = await this.teacherService.findOneTeacher({
          id: index.teacherId,
        });
        console.log('teacher:', teacher);

        classTeacher.classId = index.classId;
        classTeacher.subject = teacher.subject;
        classTeacher.primary = index.primary;
        classTeacher.classroom = classroom;
        classTeacher.teacher = teacher;
        const rs = await this.classTeacherRepository.save(classTeacher);
        // console.log('rs:', rs);

        result = await result.concat(rs);
      }
      // console.log('result:', result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async updateTimetable(data: UpdateTimetableParam) {
    const { classId } = data;
    const classTeacher = await this.classSubjectRepository.find({
      where: { classId },
    });
    return classTeacher;
  }

  public async getClassTeacher(data: GetClassTeacherDto) {
    const { classId } = data;

    const classTeacher = await this.classTeacherRepository.find({
      where: { classId },
    });
    return classTeacher;
  }

  public async searchClass(searchClassdto: SearchClassdto) {
    const filter = searchClassdto.name || '';

    try {
      const [result, total] = await this.classroomRepository.findAndCount({
        where: { name: ILike(`%${filter}%`) },
        order: { name: 'ASC' },
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

  public async updateClass(updateClassdto: any) {
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
