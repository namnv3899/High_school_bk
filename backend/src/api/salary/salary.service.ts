import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salary } from './salary.entity';
import {
  GetOneSalarydto,
  SearchSalarydto,
  UpdateSalarydto,
} from './salary.dto';

@Injectable()
export class SalaryService {
  constructor(
    @InjectRepository(Salary)
    private readonly salaryRepository: Repository<Salary>,
  ) {}

  public async createSalary(getOneSalarydto: GetOneSalarydto) {
    const { teacherId } = getOneSalarydto;
    try {
      const rs = await this.salaryRepository.findOne({
        where: { teacherId },
      });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchSalary(searchSalarydto: SearchSalarydto) {
    const take = searchSalarydto.take || 10;
    const page = searchSalarydto.page || 1;
    const skip = (page - 1) * take;
    // const filter = searchSalarydto.name || '';

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

  public async findOneSalary(getOneSalarydto: GetOneSalarydto) {
    const { teacherId } = getOneSalarydto;
    try {
      const rs = await this.salaryRepository.findOne({
        where: { teacherId },
      });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateSalary(updateSalarydto: UpdateSalarydto) {
    const { teacherId } = updateSalarydto;
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
