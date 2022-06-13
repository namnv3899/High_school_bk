import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateScoreDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  studentId: number;

  @ApiProperty()
  @IsNotEmpty()
  subjectId: number;

  @ApiProperty()
  @IsNotEmpty()
  score15m1: number;

  @ApiProperty()
  @IsNotEmpty()
  score15m2: number;

  @ApiProperty()
  @IsNotEmpty()
  score15m3: number;

  @ApiProperty()
  @IsNotEmpty()
  score45m1: number;

  @ApiProperty()
  @IsNotEmpty()
  score45m2: number;

  @ApiProperty()
  @IsNotEmpty()
  score90m: number;

  @ApiProperty()
  @IsNotEmpty()
  averageScore: number;

  @ApiProperty()
  @IsNotEmpty()
  schoolYear: number;

  @ApiProperty()
  @IsNotEmpty()
  semester: number;
}

export class UpdateScoreDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  score15m1: number;

  @ApiProperty()
  score15m2: number;

  @ApiProperty()
  score15m3: number;

  @ApiProperty()
  score45m1: number;

  @ApiProperty()
  score45m2: number;

  @ApiProperty()
  score90m: number;

  @ApiProperty()
  averageScore: number;

  @ApiProperty()
  schoolYear: number;

  @ApiProperty()
  semester: number;
}

export class GetScoreDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class DeleteScoreDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class AverageScoreDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
