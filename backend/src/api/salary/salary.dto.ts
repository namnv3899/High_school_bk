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
  salary: number;
}

export class GetOneSalaryDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  teacherId: number;
}

export class UpdateSalaryDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  salary: number;
}

export class SearchSalaryDto {
  @ApiProperty({ example: 'Hung', nullable: true })
  teacherName: string;
}

export class DeleteSalaryDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
