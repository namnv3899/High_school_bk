import { ApiProperty } from '@nestjs/swagger';

export class AccountantRegisterDto {
  @ApiProperty({ example: 'nam' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam' })
  name: string;

  @ApiProperty({ example: 'nam@gmail.com' })
  email: string;

  @ApiProperty({ example: 'nam123' })
  password: string;

  @ApiProperty({ example: 'male' })
  sex: string;

  @ApiProperty({ example: '123 Hoang Mai, Ha Noi' })
  address: string;

  @ApiProperty({ example: '1943-09-03' })
  dateOfBirth: Date;

  @ApiProperty({ example: '2020-02-19' })
  startWorking: Date;

  @ApiProperty({ example: '2021-02-19' })
  endWorking: Date;

  @ApiProperty()
  phone: number;
}

export class UpdateAccountantDtoParam {
  @ApiProperty()
  id: number;
}

export class UpdateAccountantDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  dateOfBirth: Date;
}

export class GetOneAccountantDto {
  @ApiProperty()
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
  id: number;
}
