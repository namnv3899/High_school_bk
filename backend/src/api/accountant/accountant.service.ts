import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Accountant } from './accountant.entity';
import * as bcrypt from 'bcrypt';
import {
  AccountantRegisterDto,
  DeleteAccountantDto,
  SearchAccountantDto,
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
      accountant.password = bcrypt.hashSync(
        `${accountantRegisterDto.password}`,
        10,
      );
      accountant.username = accountantRegisterDto.username;
      accountant.email = accountantRegisterDto.email;
      accountant.name = accountantRegisterDto.name;
      accountant.sex = accountantRegisterDto.sex;
      accountant.address = accountantRegisterDto.address;
      accountant.dateOfBirth = accountantRegisterDto.dateOfBirth;
      accountant.startWorking = accountantRegisterDto.startWorking;
      accountant.endWorking = accountantRegisterDto.endWorking;
      accountant.phone = Number(accountantRegisterDto.phone);
      const rs = await this.accountantRepository.save(accountant);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchAccountant(searchAccountantDto: SearchAccountantDto) {
    const filter = searchAccountantDto.name || '';

    try {
      const [result, total] = await this.accountantRepository.findAndCount({
        where: { username: ILike(`%${filter}%`) },
        order: { username: 'ASC' },
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

  public async updateAccountant(data: any) {
    const { id } = data;
    try {
      const accountant = await this.accountantRepository.findOne({
        where: { id },
      });
      accountant.username = data.username;
      accountant.email = data.email;
      accountant.name = data.name;
      accountant.sex = data.sex;
      accountant.password = data.password;
      accountant.address = data.address;
      accountant.dateOfBirth = data.dateOfBirth;
      accountant.startWorking = data.startWorking;
      accountant.endWorking = data.endWorking;
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
