import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from '../students/students.entity';
import { StudentsService } from '../students/students.service';
import {
  CreateScoreDto,
  UpdateScoreDto,
  GetScoreDto,
  AverageScoreDto,
  DeleteScoreDto,
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
    const { studentId, subjectId } = createScoreDto;
    const score = new StudentSubject();
    try {
      const student = await this.studentsService.findOneStudent({
        id: studentId,
      });
      const subject = await this.subjectRepository.findOne({
        where: { id: subjectId },
      });
      score.id = createScoreDto.id;
      score.schoolYear = createScoreDto.schoolYear;
      score.semester = createScoreDto.semester;
      score.startTimeCalculationScore = 10000000;
      score.endTimeCalculationScore = score.startTimeCalculationScore + 1;
      score.student = student;
      score.subject = subject;

      const rs = await this.scoreRepository.save(score);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateScore(updateScoreDto: UpdateScoreDto) {
    const score = new StudentSubject();
    try {
      score.id = updateScoreDto.id;
      const rs = await this.scoreRepository.save(score);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async getScore(getScoreDto: GetScoreDto) {
    const score = new StudentSubject();
    try {
      score.id = getScoreDto.id;
      const rs = await this.scoreRepository.save(score);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async averageScore(averageScoreDto: AverageScoreDto) {
    const score = new StudentSubject();
    try {
      score.id = averageScoreDto.id;
      const rs = await this.scoreRepository.save(score);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async deleteScore(deleteScoreDto: DeleteScoreDto) {
    const score = new StudentSubject();
    try {
      score.id = deleteScoreDto.id;
      const rs = await this.scoreRepository.save(score);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
