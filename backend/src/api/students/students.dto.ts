import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class StudentRegisterdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  classId: number;

  @ApiProperty({ example: 'Iris123' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  name: string;

  @ApiProperty({ example: 'iris123@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  sex: string;

  @ApiProperty()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: number;

  @ApiProperty()
  @IsNotEmpty()
  startStudying: Date;

  @ApiProperty()
  @IsNotEmpty()
  endStudying: Date;

  @ApiProperty()
  @IsNotEmpty()
  fatherName: string;

  @ApiProperty()
  @IsNotEmpty()
  fatherJob: string;

  @ApiProperty()
  @IsNotEmpty()
  fatherPhone: number;

  @ApiProperty()
  @IsNotEmpty()
  fatherDateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  fatherJobAddress: string;

  @ApiProperty()
  @IsNotEmpty()
  motherName: string;

  @ApiProperty()
  @IsNotEmpty()
  motherJob: string;

  @ApiProperty()
  @IsNotEmpty()
  motherPhone: number;

  @ApiProperty()
  @IsNotEmpty()
  motherDateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  motherJobAddress: string;

  @ApiProperty()
  @IsNotEmpty()
  schoolYear: number;

  @ApiProperty()
  @IsNotEmpty()
  semester: number;
}

export class GetOneStudentdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class UpdateStudentdto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  classId: number;

  @ApiProperty({ example: 'Iris123' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam' })
  name: string;

  @ApiProperty({ example: 'iris123@gmail.com' })
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  startStudying: Date;

  @ApiProperty()
  endStudying: Date;

  @ApiProperty()
  fatherName: string;

  @ApiProperty()
  fatherJob: string;

  @ApiProperty()
  fatherPhone: number;

  @ApiProperty()
  fatherDateOfBirth: Date;

  @ApiProperty()
  fatherJobAddress: string;

  @ApiProperty()
  motherName: string;

  @ApiProperty()
  motherJob: string;

  @ApiProperty()
  motherPhone: number;

  @ApiProperty()
  motherDateOfBirth: Date;

  @ApiProperty()
  motherJobAddress: string;

  @ApiProperty()
  schoolYear: number;

  @ApiProperty()
  semester: number;
}

export class SearchStudentdto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteStudentdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
