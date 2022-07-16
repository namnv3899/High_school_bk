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

  @ApiProperty({ example: 'Nam123' })
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'Nam123' })
  @IsNotEmpty()
  sex: string;

  @ApiProperty({ example: '2021-02-19' })
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty({ example: '2021-02-19' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 243242473 })
  @IsNotEmpty()
  phone: number;

  @ApiProperty({ example: '2021-02-19' })
  @IsNotEmpty()
  startStudying: Date;

  @ApiProperty({ example: '20rwtr9' })
  @IsNotEmpty()
  fatherName: string;

  @ApiProperty({ example: '20rwtr9' })
  @IsNotEmpty()
  fatherJob: string;

  @ApiProperty({ example: 4324214 })
  @IsNotEmpty()
  fatherPhone: number;

  @ApiProperty({ example: '1943-09-03' })
  @IsNotEmpty()
  fatherDateOfBirth: Date;

  @ApiProperty({ example: '31 ngo Duy Hung, tp Ha Noi' })
  @IsNotEmpty()
  fatherJobAddress: string;

  @ApiProperty({ example: 'Noi' })
  @IsNotEmpty()
  motherName: string;

  @ApiProperty({ example: 'fsadfsdfi' })
  @IsNotEmpty()
  motherJob: string;

  @ApiProperty({ example: 243242473 })
  @IsNotEmpty()
  motherPhone: number;

  @ApiProperty({ example: '1943-09-03' })
  @IsNotEmpty()
  motherDateOfBirth: Date;

  @ApiProperty({ example: '31 ngo Duy Hung, tp Ha Noi' })
  @IsNotEmpty()
  motherJobAddress: string;
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
}

export class SearchStudentdto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;
}

export class DeleteStudentdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
