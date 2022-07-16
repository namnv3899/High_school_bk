import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountantModule } from './api/accountant/accountant.module';
import { AuthModule } from './api/auth/auth.module';
import { ClassModule } from './api/class/class.module';
import { FacilityModule } from './api/facility/facility.module';
import { SalaryModule } from './api/salary/salary.module';
import { ScoreModule } from './api/score/scores.module';
import { StudentsModule } from './api/students/students.module';
import { TeacherModule } from './api/teacher/teacher.module';
// import { configs } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'high_school',
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentsModule,
    AccountantModule,
    AuthModule,
    ClassModule,
    FacilityModule,
    SalaryModule,
    TeacherModule,
    ScoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
