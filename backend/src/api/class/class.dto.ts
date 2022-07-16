import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClassdto {
  @ApiProperty({ example: '11A2' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  name: string;

  @ApiProperty({ example: 'B3_102' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  startYear: number;

  @ApiProperty()
  @IsNotEmpty()
  endYear: number;

  @ApiProperty()
  @IsNotEmpty()
  facilityId: number;

  @ApiProperty()
  @IsNotEmpty()
  role: string;

  @ApiProperty()
  @IsNotEmpty()
  subjectId: number;

  @ApiProperty()
  @IsNotEmpty()
  semester: number;

  @ApiProperty()
  @IsNotEmpty()
  lesson: number;

  @ApiProperty()
  @IsNotEmpty()
  sesionOfDay: string;

  @ApiProperty()
  @IsNotEmpty()
  DayOfWeek: string;

  @ApiProperty()
  @IsNotEmpty()
  schoolYear: number;
}

export class TimetableDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  classId: number;

  @ApiProperty()
  @IsNotEmpty()
  subjectId: number;

  @ApiProperty()
  @IsNotEmpty()
  lesson: number;

  @ApiProperty()
  @IsNotEmpty()
  dayOfWeek: string;

  @ApiProperty()
  @IsNotEmpty()
  sessionOfDay: string;

  @ApiProperty()
  @IsNotEmpty()
  schoolYear: number;

  @ApiProperty()
  @IsNotEmpty()
  semester: number;
}

export class AssignClassTeacherDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  teacherId: number;

  @ApiProperty()
  @IsNotEmpty()
  classId: number;

  @ApiProperty()
  @IsNotEmpty()
  subjectId: number;

  @ApiProperty()
  @IsNotEmpty()
  role: string;

  @ApiProperty()
  @IsNotEmpty()
  semester: number;

  @ApiProperty()
  @IsNotEmpty()
  schoolYear: number;
}

export class UpdateClassdto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  studentId: number;

  @ApiProperty({ example: '11A2' })
  name: string;

  @ApiProperty({ example: 'B3_102' })
  location: string;

  @ApiProperty()
  startYear: number;

  @ApiProperty()
  endYear: number;

  @ApiProperty()
  facilityId: number;

  @ApiProperty()
  role: string;

  @ApiProperty()
  subjectId: number;

  @ApiProperty()
  semester: number;

  @ApiProperty()
  lesson: number;

  @ApiProperty()
  sesionOfDay: string;

  @ApiProperty()
  DayOfWeek: string;

  @ApiProperty()
  schoolYear: number;
}

export class GetOneClassdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class SearchClassdto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteClassdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
