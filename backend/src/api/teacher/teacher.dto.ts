import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TeacherRegisterdto {
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
  @IsString()
  sex: string;

  @ApiProperty()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: number;

  @ApiProperty()
  @IsNotEmpty()
  startWorking: Date;

  @ApiProperty()
  @IsNotEmpty()
  endWorking: Date;
}

export class UpdateTeacherdto {
  @ApiProperty({ example: '001' })
  id: number;

  @ApiProperty({ example: 'Iris123333' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam 2' })
  name: string;

  @ApiProperty({ example: 'iris12223@gmail.com' })
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
  startWorking: Date;

  @ApiProperty()
  endWorking: Date;
}

export class GetOneTeacherdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class SearchTeacherdto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteTeacherdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
