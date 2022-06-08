import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityController } from './facility.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facility } from './facility.entity';

@Module({
  controllers: [FacilityController],
  imports: [TypeOrmModule.forFeature([Facility]), AuthModule],
  exports: [FacilityService],
  providers: [FacilityService],
})
export class FacilityModule {}
