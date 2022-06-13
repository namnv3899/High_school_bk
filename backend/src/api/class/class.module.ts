import { forwardRef, Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Classroom, ClassSubject, ClassTeacher } from './class.entity';
import { Subject } from '../students/students.entity';
import { TeacherModule } from '../teacher/teacher.module';

@Module({
  controllers: [ClassController],
  imports: [
    TypeOrmModule.forFeature([Classroom, ClassSubject, ClassTeacher, Subject]),
    forwardRef(() => AuthModule),
    TeacherModule,
  ],
  exports: [ClassService],
  providers: [ClassService],
})
export class ClassModule {}
