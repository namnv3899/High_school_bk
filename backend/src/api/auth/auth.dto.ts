import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export enum Role {
  student = 'Student',
  teacher = 'Teacher',
  accountant = 'Accountant',
  admin = 'Admin',
  parent = 'Parent',
}

export class LoginDto {
  @ApiProperty({ example: 'Iris123' })
  username: string;

  @ApiProperty({ example: 'iris123@gmail.com' })
  email: string;

  @ApiProperty({ example: Role.student })
  role: Role;

  @ApiProperty()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
