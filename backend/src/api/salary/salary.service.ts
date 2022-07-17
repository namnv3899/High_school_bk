import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salary } from './salary.entity';
import { GetOneSalaryDto, CreateSalaryDto } from './salary.dto';
import { TeacherService } from '../teacher/teacher.service';
import { AccountantService } from '../accountant/accountant.service';

@Injectable()
export class SalaryService {
  constructor(
    @InjectRepository(Salary)
    private readonly salaryRepository: Repository<Salary>,
    private readonly teacherService: TeacherService,
    private readonly accountantService: AccountantService,
  ) {}

  public async createSalary(createSalaryDto: CreateSalaryDto) {
    const { teacherId, accountantId } = createSalaryDto;
    const salary = new Salary();
    try {
      const teacher = await this.teacherService.findOneTeacher({
        id: teacherId,
      });
      const accountant = await this.accountantService.findOneAccountant({
        id: accountantId,
      });

      salary.accountantId = accountant.id;
      salary.teacherId = teacher.id;
      salary.techerName = teacher.name;
      // salary.teacher = teacher;
      salary.accountant = accountant;
      salary.salary = createSalaryDto.salary;

      const rs = this.salaryRepository.save(salary);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchSalary() {
    try {
      const rs = await this.salaryRepository.find();

      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async findOneSalary(getOneSalaryDto: GetOneSalaryDto) {
    const { teacherId } = getOneSalaryDto;
    try {
      const rs = await this.salaryRepository.findOne({
        where: { teacherId },
      });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateSalary(updateSalaryDto: any) {
    const { teacherId } = updateSalaryDto;
    try {
      const salary = await this.salaryRepository.findOne({
        where: { teacherId },
      });
      // salary.senioritySalary = email;
      // salary.totalSalaryDays = username;
      // salary.yearsSeniority = tokenVerify;

      const rs = await this.salaryRepository.save(salary);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
