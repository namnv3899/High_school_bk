import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSalaryDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  teacherId: number;

  @ApiProperty()
  @IsNotEmpty()
  accountantId: number;

  @ApiProperty()
  @IsNotEmpty()
  payday: Date;

  @ApiProperty()
  @IsNotEmpty()
  totalSalaryDays: number;

  @ApiProperty()
  @IsNotEmpty()
  monthOfYear: number;

  @ApiProperty()
  @IsNotEmpty()
  yearsSeniority: Date;

  @ApiProperty()
  @IsNotEmpty()
  salaryOfDay: number;

  @ApiProperty()
  @IsNotEmpty()
  senioritySalary: number;
}

export class GetOneSalaryDto {
  @ApiProperty()
  @IsNotEmpty()
  teacherId: number;
}

export class UpdateSalaryDto {
  @ApiProperty()
  @IsNotEmpty()
  teacherId: number;
}

export class SearchSalaryDto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteSalaryDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
