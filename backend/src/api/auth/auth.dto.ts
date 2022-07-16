import { ApiProperty } from '@nestjs/swagger';

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
  password: string;
}

export class AdminRegisterDto {
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: 'admin123' })
  password: string;
}
