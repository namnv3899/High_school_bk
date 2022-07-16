import { ApiProperty } from '@nestjs/swagger';

export class CreateClassdto {
  @ApiProperty({ example: '11A2' })
  name: string;

  @ApiProperty({ example: 'B3_102' })
  location: string;

  @ApiProperty({ example: 2020 })
  startYear: number;

  @ApiProperty({ example: 2023 })
  endYear: number;
}

export class ParamsUpdate {
  @ApiProperty()
  id: number;
}

export class TimetableDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  classId: number;

  @ApiProperty()
  subjectId: number;

  @ApiProperty()
  lesson: number;

  @ApiProperty()
  dayOfWeek: string;

  @ApiProperty()
  sessionOfDay: string;

  @ApiProperty()
  schoolYear: number;

  @ApiProperty()
  semester: number;
}

export class AssignClassTeacherDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  teacherId: number;

  @ApiProperty()
  classId: number;

  @ApiProperty()
  subjectId: number;

  @ApiProperty()
  role: string;
}

export class UpdateClassdto {
  @ApiProperty({ example: '11A2' })
  name: string;

  @ApiProperty({ example: 'B3_102' })
  location: string;

  @ApiProperty({ example: 2020 })
  startYear: number;

  @ApiProperty({ example: 2023 })
  endYear: number;
}

export class GetOneClassdto {
  @ApiProperty()
  id: number;
}

export class SearchClassdto {
  @ApiProperty({ example: '11A2', nullable: true })
  name: string;
}

export class DeleteClassdto {
  @ApiProperty()
  id: number;
}
