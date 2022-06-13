import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityController } from './facility.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facility } from './facility.entity';
import { ClassModule } from '../class/class.module';

@Module({
  controllers: [FacilityController],
  imports: [TypeOrmModule.forFeature([Facility]), AuthModule, ClassModule],
  exports: [FacilityService],
  providers: [FacilityService],
})
export class FacilityModule {}
