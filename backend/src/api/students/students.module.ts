import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Student, StudentSubject, Subject } from './students.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  controllers: [StudentsController],
  imports: [
    TypeOrmModule.forFeature([Student, StudentSubject, Subject]),
    AuthModule,
  ],
  exports: [StudentsService],
  providers: [StudentsService],
})
export class StudentsModule {}
