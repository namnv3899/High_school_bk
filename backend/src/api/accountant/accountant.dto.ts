import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AccountantRegisterDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  salaryId: number;

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
  startWorking: Date;

  @ApiProperty()
  @IsNotEmpty()
  endWorking: Date;

  @ApiProperty()
  @IsNotEmpty()
  phone: number;
}

export class UpdateAccountantDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class GetOneAccountantDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class SearchAccountantDto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteAccountantDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
