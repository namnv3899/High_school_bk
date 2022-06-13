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
      type: String(process.env.DB_TYPE),
      synchronize: true,
      logging: 'all',
      host: String(process.env.DB_HOST),
      port: Number(process.env.DB_PORT),
      username: String(process.env.DB_USER),
      password: String(process.env.DB_PASSWORD),
      database: String(process.env.DB_NAME),
      autoLoadEntities: true,
      entities: ['dist/**/**/*.entity{.ts,.js}'],
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
