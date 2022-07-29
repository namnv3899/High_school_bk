import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from '../students/students.entity';
import { StudentsService } from '../students/students.service';
import {
  CreateScoreDto,
  GetScoreDto,
  AverageScoreDto,
  DeleteScoreDto,
  ScoreOfStudentDto,
  ScoreOfSubjectDto,
  ScoreOfClassOfTeacherPrimary,
} from './scores.dto';
import { StudentSubject } from './scores.entity';

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(StudentSubject)
    private readonly scoreRepository: Repository<StudentSubject>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    private readonly studentsService: StudentsService,
  ) {}

  public async createScore(createScoreDto: CreateScoreDto) {
    const { studentId } = createScoreDto;
    const score = new StudentSubject();
    const startTimeCalScore =
      Math.floor(new Date().getTime()) + 1000 * 7 * 24 * 60 * 60 * 12;
    const endTimeCalScore =
      Math.floor(new Date().getTime()) + 1000 * 7 * 24 * 60 * 60 * 14;
    try {
      const student = await this.studentsService.findOneStudent({
        id: studentId,
      });
      // const subject = await this.subjectRepository.findOne({
      //   where: { id: subjectId },
      // });
      score.schoolYear = createScoreDto.schoolYear;
      score.semester = createScoreDto.semester;
      score.startTimeCalculationScore = startTimeCalScore;
      score.endTimeCalculationScore = endTimeCalScore;
      score.score15m1 = createScoreDto.score15m1;
      score.score15m2 = createScoreDto.score15m2;
      score.score15m3 = createScoreDto.score15m3;
      score.score45m1 = createScoreDto.score45m1;
      score.score45m2 = createScoreDto.score45m2;
      score.score90m = createScoreDto.score90m;
      score.studentId = student.id;
      score.student = student;
      score.subject = createScoreDto.subject;
      const rs = await this.scoreRepository.save(score);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateScore(updateScoreDto: any) {
    try {
      console.log('updateScoreDto:', updateScoreDto.id);
      const score = await this.scoreRepository.findOne({
        where: { id: updateScoreDto.id },
      });
      console.log('score1', score);
      if (score.endTimeCalculationScore < Math.floor(new Date().getTime())) {
        throw new BadRequestException('Time over to enter score');
      }
      if (updateScoreDto.score15m1 > 10 || updateScoreDto.score15m1 < 0) {
        throw new BadRequestException(
          'Điểm số cần phải lớn hơn 0 và nhỏ hơn 10',
        );
      }
      if (updateScoreDto.score15m2 > 10 || updateScoreDto.score15m2 < 0) {
        throw new BadRequestException(
          'Điểm số cần phải lớn hơn 0 và nhỏ hơn 10',
        );
      }
      if (updateScoreDto.score15m3 > 10 || updateScoreDto.score15m3 < 0) {
        throw new BadRequestException(
          'Điểm số cần phải lớn hơn 0 và nhỏ hơn 10',
        );
      }
      if (updateScoreDto.score45m1 > 10 || updateScoreDto.score45m1 < 0) {
        throw new BadRequestException(
          'Điểm số cần phải lớn hơn 0 và nhỏ hơn 10',
        );
      }
      if (updateScoreDto.score45m2 > 10 || updateScoreDto.score45m2 < 0) {
        throw new BadRequestException(
          'Điểm số cần phải lớn hơn 0 và nhỏ hơn 10',
        );
      }
      if (updateScoreDto.score90m > 10 || updateScoreDto.score90m < 0) {
        throw new BadRequestException(
          'Điểm số cần phải lớn hơn 0 và nhỏ hơn 10',
        );
      }

      score.score15m1 = updateScoreDto.score15m1;
      score.score15m2 = updateScoreDto.score15m2;
      score.score15m3 = updateScoreDto.score15m3;
      score.score45m1 = updateScoreDto.score45m1;
      score.score45m2 = updateScoreDto.score45m2;
      score.score90m = updateScoreDto.score90m;

      const rs = await this.scoreRepository.save(score);
      console.log('score2', rs);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async listScoreOfOneSubject(scoreOfSubjectDto: ScoreOfSubjectDto) {
    try {
      const { classId, subject } = scoreOfSubjectDto;
      // console.log('scoreOfClassOfTeacherPrimary:', scoreOfClassOfTeacherPrimary);
      // const rs = await this.scoreRepository.find({ where: { subject } });
      const rs = await this.scoreRepository
        .createQueryBuilder('studentSubjects')
        .innerJoinAndSelect('studentSubjects.student', 'student')
        .innerJoin('student.classroom', 'classroom')
        .where('classroom.id=:classId', { classId })
        .where('studentSubjects.subject=:subject', { subject })
        .orderBy('student.name', 'ASC')
        .getMany();
      console.log('rs:', rs);

      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async listScoreOfClassOfTeacherPrimary(
    scoreOfClassOfTeacherPrimary: ScoreOfClassOfTeacherPrimary,
  ) {
    try {
      const { classId, subject } = scoreOfClassOfTeacherPrimary;
      const rs = await this.scoreRepository
        .createQueryBuilder('studentSubjects')
        .innerJoinAndSelect('studentSubjects.student', 'student')
        .innerJoinAndSelect('student.classroom', 'classroom')
        .innerJoin('classroom.classTeachers', 'classTeachers')
        .where('classroom.id=:classId', { classId })
        .andWhere('classTeachers.subject=:subject', { subject })
        .getMany();
      console.log('rs:', rs);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async listScoreOfStudent(scoreOfStudentDto: ScoreOfStudentDto) {
    try {
      const rs = await this.scoreRepository.findAndCount({
        where: { studentId: scoreOfStudentDto.studentId },
      });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async getScore(getScoreDto: GetScoreDto) {
    try {
      const rs = await this.scoreRepository.findOne({
        where: { id: getScoreDto.id },
      });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async averageScore(averageScoreDto: AverageScoreDto) {
    try {
      const score = await this.scoreRepository.findOne({
        where: { id: averageScoreDto.id },
      });
      console.log('score:', typeof score.score15m2);
      // if (score.startTimeCalculationScore > Math.floor(new Date().getTime())) {
      //   throw new BadRequestException("It's not time to calculation score yet");
      // }

      // if (score.endTimeCalculationScore < Math.floor(new Date().getTime())) {
      //   throw new BadRequestException('timeover to calculation score');
      // }
      let score15m1 = score.score15m1;
      let score15m2 = score.score15m2;
      let score15m3 = score.score15m3;
      let score45m1 = score.score45m1;
      let score45m2 = score.score45m2;
      let score90m = score.score90m;
      if (isNaN(score.score15m1)) {
        score15m1 = 0;
      }
      if (isNaN(score15m2)) {
        score15m2 = 0;
        console.log('score15m2:', score15m2);
      }
      if (isNaN(score15m3)) {
        score15m3 = 0;
        console.log('score15m2:', score15m2);
      }
      if (isNaN(score45m1)) {
        score45m1 = 0;
      }
      if (isNaN(score45m2)) {
        score45m2 = 0;
      }
      if (isNaN(score90m)) {
        score90m = 0;
      }
      console.log('score15m1:', score15m2);
      const averageScoreScore =
        (score15m1 +
          score15m2 +
          score15m3 +
          score45m1 * 2 +
          score45m2 * 2 +
          score90m * 3) /
        10;
      score.averageScore = averageScoreScore;
      console.log('averageScoreScore:', averageScoreScore);

      const rs = await this.scoreRepository.save(score);

      // const rs = await this.scoreRepository
      //   .createQueryBuilder()
      //   .update(StudentSubject)
      //   .set({ averageScore: averageScoreScore })
      //   .where('id = :id', { id: averageScoreDto.id })
      //   .execute();
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async deleteScore(deleteScoreDto: DeleteScoreDto) {
    try {
      const rs = await this.scoreRepository.delete(deleteScoreDto.id);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
