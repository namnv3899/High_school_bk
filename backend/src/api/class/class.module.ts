import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Classroom, ClassSubject, ClassTeacher } from './class.entity';

@Module({
  controllers: [ClassController],
  imports: [
    TypeOrmModule.forFeature([Classroom, ClassSubject, ClassTeacher]),
    AuthModule,
  ],
  exports: [ClassService],
  providers: [ClassService],
})
export class ClassModule {}
