import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Accountant } from './accountant.entity';
import * as bcrypt from 'bcrypt';
import {
  GetOneAccountantdto,
  AccountantRegisterdto,
  DeleteAccountantdto,
  SearchAccountantdto,
  UpdateAccountantdto,
} from './accountant.dto';

@Injectable()
export class AccountantService {
  constructor(
    @InjectRepository(Accountant)
    private readonly accountantRepository: Repository<Accountant>,
  ) {}

  public async createAccountant(accountantRegisterdto: AccountantRegisterdto) {
    try {
      const accountant = new Accountant();
      accountant.username = accountantRegisterdto.username;
      accountant.email = accountantRegisterdto.email;
      accountant.password = bcrypt.hashSync(
        `${accountantRegisterdto.password}`,
        10,
      );

      const rs = await this.accountantRepository.save(accountant);
      return rs;
    } catch (error) {
      throw error;
    }
  }

  public async searchAccountant(searchAccountantdto: SearchAccountantdto) {
    const take = searchAccountantdto.take || 10;
    const page = searchAccountantdto.page || 1;
    const skip = (page - 1) * take;
    const filter = searchAccountantdto.name || '';

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

  public async findOneAccountant(getOneAccountantdto: GetOneAccountantdto) {
    const { id } = getOneAccountantdto;
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

  public async updateAccountant(updateAccountantdto: UpdateAccountantdto) {
    const { id } = updateAccountantdto;
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

  public async removeAccountant(deleteAccountantdto: DeleteAccountantdto) {
    try {
      const { id } = deleteAccountantdto;

      const rs = await this.accountantRepository.delete(id);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
