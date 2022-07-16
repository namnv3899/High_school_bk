import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSalaryDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  teacherId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  accountantId: number;

  @ApiProperty({ example: '2020-02-19' })
  @IsNotEmpty()
  payday: Date;

  @ApiProperty({ example: 20 })
  @IsNotEmpty()
  totalSalaryDays: number;

  @ApiProperty({ example: 3 })
  @IsNotEmpty()
  monthOfYear: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  yearsSeniority: number;

  @ApiProperty({ example: 5000000 })
  @IsNotEmpty()
  salaryOfDay: number;

  @ApiProperty({ example: 300000 })
  @IsNotEmpty()
  senioritySalary: number;
}

export class GetOneSalaryDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  teacherId: number;
}

export class UpdateSalaryDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  teacherId: number;
}

export class SearchSalaryDto {
  @ApiProperty({ example: 'Hung', nullable: true })
  teacherName: string;

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
