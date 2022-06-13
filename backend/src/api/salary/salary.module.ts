import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salary } from './salary.entity';
import { AuthModule } from '../auth/auth.module';
import { TeacherModule } from '../teacher/teacher.module';
import { AccountantModule } from '../accountant/accountant.module';

@Module({
  controllers: [SalaryController],
  imports: [
    TypeOrmModule.forFeature([Salary]),
    AuthModule,
    TeacherModule,
    AccountantModule,
  ],
  exports: [SalaryService],
  providers: [SalaryService],
})
export class SalaryModule {}
