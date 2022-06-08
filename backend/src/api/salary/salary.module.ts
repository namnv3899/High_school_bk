import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salary } from './salary.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [SalaryController],
  imports: [TypeOrmModule.forFeature([Salary]), AuthModule],
  exports: [SalaryService],
  providers: [SalaryService],
})
export class SalaryModule {}
