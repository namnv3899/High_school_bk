import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salary } from './salary.entity';
import {
  GetOneSalaryDto,
  CreateSalaryDto,
  SearchSalaryDto,
  UpdateSalaryDto,
} from './salary.dto';
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
      salary.teacher = teacher;
      salary.accountant = accountant;
      salary.monthOfYear = createSalaryDto.monthOfYear;
      salary.senioritySalary = createSalaryDto.senioritySalary;
      salary.totalSalaryDays = createSalaryDto.totalSalaryDays;
      salary.payDay = createSalaryDto.payday;
      salary.salaryOfDay = createSalaryDto.salaryOfDay;

      const rs = this.salaryRepository.save(salary);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchSalary(searchSalaryDto: SearchSalaryDto) {
    const take = searchSalaryDto.take || 10;
    const page = searchSalaryDto.page || 1;
    const skip = (page - 1) * take;
    // const filter = searchSalaryDto.name || '';

    try {
      const [result, total] = await this.salaryRepository.findAndCount({
        // where: { username: ILike(`%${filter}%`) },
        // order: { username: 'ASC' },
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

  public async updateSalary(updateSalaryDto: UpdateSalaryDto) {
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
