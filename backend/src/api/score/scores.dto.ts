import { ApiProperty } from '@nestjs/swagger';

export class CreateScoreDto {
  @ApiProperty()
  studentId: number;

  @ApiProperty()
  subjectId: number;

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
  id: number;
}

export class DeleteScoreDto {
  @ApiProperty()
  id: number;
}

export class AverageScoreDto {
  @ApiProperty()
  id: number;
}
