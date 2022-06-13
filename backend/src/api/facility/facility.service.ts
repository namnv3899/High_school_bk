import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Facility } from './facility.entity';
import {
  UpdateFacilitydto,
  CreateFacilitydto,
  DeleteFacilitydto,
  GetOneFacilitydto,
  SearchFacilitydto,
} from './facility.dto';
import { ClassService } from '../class/class.service';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facility)
    private readonly facilityRepository: Repository<Facility>,
    private readonly classService: ClassService,
  ) {}

  public async createFacility(createFacilitydto: CreateFacilitydto) {
    try {
      const classroom = await this.classService.findOneClass({
        id: createFacilitydto.classId,
      });
      const facility = new Facility();
      facility.name = createFacilitydto.name;
      facility.price = createFacilitydto.price;
      facility.classroom = classroom;
      facility.location = createFacilitydto.location;
      facility.timeIn = createFacilitydto.timeIn;
      facility.status = createFacilitydto.status;

      const rs = await this.facilityRepository.save(facility);
      return rs;
    } catch (error) {
      throw error;
    }
  }
  public async searchFacility(searchFacilitydto: SearchFacilitydto) {
    const take = searchFacilitydto.take || 10;
    const page = searchFacilitydto.page || 1;
    const skip = (page - 1) * take;
    const filter = searchFacilitydto.name || '';

    try {
      const [result, total] = await this.facilityRepository.findAndCount({
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
  public async findOneFacility(getOneFacilitydto: GetOneFacilitydto) {
    const { id } = getOneFacilitydto;
    try {
      if (!id) {
        const rs = await this.facilityRepository.findOne({ where: { id } });
        return rs;
      }

      const rs = await this.facilityRepository.findOne({ where: { id } });
      return rs;
    } catch (error) {
      throw error;
    }
  }
  public async updateFacility(updateFacilitydto: UpdateFacilitydto) {
    const { id } = updateFacilitydto;
    try {
      const user = await this.facilityRepository.findOne({ where: { id } });

      const rs = await this.facilityRepository.save(user);
      return rs;
    } catch (error) {
      throw error;
    }
  }
  public async removeFacility(deleteFacilitydto: DeleteFacilitydto) {
    try {
      const { id } = deleteFacilitydto;

      const rs = await this.facilityRepository.delete(id);
      return rs;
    } catch (error) {
      throw error;
    }
  }
}
