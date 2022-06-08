import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { TeacherController } from './teacher.controller';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';

@Module({
  controllers: [TeacherController],
  imports: [TypeOrmModule.forFeature([Teacher]), AuthModule],
  exports: [TeacherService],
  providers: [TeacherService],
})
export class TeacherModule {}
