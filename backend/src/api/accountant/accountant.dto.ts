import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AccountantRegisterDto {
  @ApiProperty({ example: 'nam' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  name: string;

  @ApiProperty({ example: 'nam@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'nam123' })
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'male' })
  @IsNotEmpty()
  sex: string;

  @ApiProperty({ example: '1943-09-03' })
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty({ example: '2020-02-19' })
  @IsNotEmpty()
  startWorking: Date;

  @ApiProperty({ example: '2021-02-19' })
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
