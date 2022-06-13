import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto, Role } from './auth.dto';
import { AccountantService } from '../accountant/accountant.service';
import { StudentsService } from '../students/students.service';
import { TeacherService } from '../teacher/teacher.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => AccountantService))
    private readonly accountantService: AccountantService,
    @Inject(forwardRef(() => StudentsService))
    private readonly studentsService: StudentsService,
    @Inject(forwardRef(() => TeacherService))
    private readonly teacherService: TeacherService,
    private readonly jwtService: JwtService,
  ) {}

  public async login(loginDto: LoginDto) {
    const { email, password, role, username } = loginDto;
    let user: any;
    let checkValidPassword: any;
    let token: any;
    try {
      switch (role) {
        // case Role.admin:
        //   user = await this.adminService.findOne()
        //   break;
        case Role.student:
          user = await this.studentsService.findOneStudent({ email, username });
          if (!user) {
            throw new BadRequestException('Email or username wrong');
          }
          checkValidPassword = bcrypt.compare(user.password, password);
          if (!checkValidPassword) {
            throw new BadRequestException('Password wrong');
          }
          token = this.jwtService.sign({ id: user.id });
          break;

        case Role.parent:
          user = await this.studentsService.findOneStudent({
            email,
            username,
          });
          if (!user) {
            throw new BadRequestException('Email or username wrong');
          }
          checkValidPassword = bcrypt.compare(user.password, password);
          if (!checkValidPassword) {
            throw new BadRequestException('Password wrong');
          }
          token = this.jwtService.sign({ id: user.id });
          break;

        case Role.accountant:
          user = await this.accountantService.findOneAccountant({
            email,
            username,
          });
          if (!user) {
            throw new BadRequestException('Email or username wrong');
          }
          checkValidPassword = bcrypt.compare(user.password, password);
          if (!checkValidPassword) {
            throw new BadRequestException('Password wrong');
          }
          token = this.jwtService.sign({ id: user.id });
          break;

        case Role.teacher:
          user = await this.teacherService.findOneTeacher({
            email,
            username,
          });
          if (!user) {
            throw new BadRequestException('Email or username wrong');
          }
          checkValidPassword = bcrypt.compare(user.password, password);
          if (!checkValidPassword) {
            throw new BadRequestException('Password wrong');
          }
          token = this.jwtService.sign({ id: user.id });
          break;

        default:
          throw new BadRequestException('Login fail, please enter your role');
      }

      return token;
    } catch (error) {
      throw error;
    }
  }
}
