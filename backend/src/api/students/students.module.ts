import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Student, Subject } from './students.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { ClassModule } from '../class/class.module';

@Module({
  controllers: [StudentsController],
  imports: [
    TypeOrmModule.forFeature([Student, Subject]),
    forwardRef(() => AuthModule),
    forwardRef(() => ClassModule),
  ],
  exports: [StudentsService],
  providers: [StudentsService],
})
export class StudentsModule {}
