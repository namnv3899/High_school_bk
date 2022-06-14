import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { configs } from '../../config/config';
import { StudentsModule } from '../students/students.module';
import { TeacherModule } from '../teacher/teacher.module';
import { AccountantModule } from '../accountant/accountant.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../accountant/accountant.entity';

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([Admin]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: configs.jwtAccessKey,
      signOptions: {
        expiresIn: configs.expiresIn,
      },
    }),
    forwardRef(() => StudentsModule),
    forwardRef(() => TeacherModule),
    forwardRef(() => AccountantModule),
  ],
  providers: [JwtStrategy, AuthService],
  exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}
