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

  @ApiProperty({ example: '1943-09-03' })
  dateOfBirth: Date;

  @ApiProperty({ example: '2020-02-19' })
  startWorking: Date;

  @ApiProperty({ example: '2021-02-19' })
  endWorking: Date;

  @ApiProperty()
  phone: number;
}

export class UpdateAccountantDto {
  @ApiProperty()
  id: number;
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
