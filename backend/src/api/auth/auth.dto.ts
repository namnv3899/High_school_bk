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
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: Role.admin })
  role: Role;

  @ApiProperty({ example: 'admin@gmail.com' })
  email: string;

  @ApiProperty({ example: 'admin123' })
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}

export class AdminRegisterDto {
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: 'admin123' })
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
