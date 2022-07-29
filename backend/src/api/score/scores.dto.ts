import { ApiProperty } from '@nestjs/swagger';
import { Max, Min } from 'class-validator';

export class CreateScoreDto {
  @ApiProperty()
  studentId: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score15m1: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score15m2: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score15m3: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score45m1: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score45m2: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score90m: number;

  @ApiProperty({ example: 'Ngoại Ngữ' })
  subject: string;

  @ApiProperty()
  schoolYear: number;

  @ApiProperty()
  semester: number;
}

export class UpdateScoreDtoParam {
  @ApiProperty()
  id: number;
}

export class ScoreOfStudentDto {
  @ApiProperty()
  studentId: number;
}

export class ScoreOfSubjectDto {
  @ApiProperty()
  classId: number;

  @ApiProperty()
  subject: string;
}

export class ScoreOfClassOfTeacherPrimary {
  @ApiProperty()
  classId: number;

  @ApiProperty()
  subject: string;
}

export class UpdateScoreDto {
  @ApiProperty()
  @Min(0)
  @Max(10)
  score15m1: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score15m2: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score15m3: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score45m1: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score45m2: number;

  @ApiProperty()
  @Min(0)
  @Max(10)
  score90m: number;

  @ApiProperty()
  @Min(0)
  @Max(2022)
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
