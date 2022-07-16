import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Accountant } from './accountant.entity';
import * as bcrypt from 'bcrypt';
import {
  AccountantRegisterDto,
  DeleteAccountantDto,
  SearchAccountantDto,
  UpdateAccountantDto,
} from './accountant.dto';

@Injectable()
export class AccountantService {
  constructor(
    @InjectRepository(Accountant)
    private readonly accountantRepository: Repository<Accountant>,
  ) {}

  public async createAccountant(accountantRegisterDto: AccountantRegisterDto) {
    try {
      const accountant = new Accountant();
      accountant.username = accountantRegisterDto.username;
      accountant.email = accountantRegisterDto.email;
      accountant.password = bcrypt.hashSync(
        `${accountantRegisterDto.password}`,
        10,
      );
      accountant.dateOfBirth = accountantRegisterDto.dateOfBirth;
      accountant.startWorking = accountantRegisterDto.startWorking;
      accountant.endWorking = accountantRegisterDto.endWorking;

      const rs = await this.accountantRepository.save(accountant);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchAccountant(searchAccountantDto: SearchAccountantDto) {
    const take = searchAccountantDto.take || 10;
    const page = searchAccountantDto.page || 1;
    const skip = (page - 1) * take;
    const filter = searchAccountantDto.name || '';

    try {
      const [result, total] = await this.accountantRepository.findAndCount({
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

  public async findOneAccountant(getOneAccountantDto: any) {
    const { id } = getOneAccountantDto;
    try {
      if (!id) {
        const rs = await this.accountantRepository.findOne({
          where: { id },
        });
        return rs;
      }

      const rs = await this.accountantRepository.findOne({ where: { id } });
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async updateAccountant(updateAccountantDto: UpdateAccountantDto) {
    const { id } = updateAccountantDto;
    try {
      const accountant = await this.accountantRepository.findOne({
        where: { id },
      });

      const rs = await this.accountantRepository.save(accountant);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async removeAccountant(deleteAccountantDto: DeleteAccountantDto) {
    try {
      const { id } = deleteAccountantDto;

      const rs = await this.accountantRepository.delete(id);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
