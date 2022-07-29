import { ApiProperty } from '@nestjs/swagger';

export class CreateScoreDto {
  @ApiProperty()
  studentId: number;

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
