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

  @ApiProperty({ example: 2020 })
  @IsNotEmpty()
  startYear: number;

  @ApiProperty({ example: 2023 })
  @IsNotEmpty()
  endYear: number;
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
}

export class UpdateClassdto {
  @ApiProperty()
  id: number;

  @ApiProperty({ example: '11A2' })
  name: string;

  @ApiProperty({ example: 'B3_102' })
  location: string;

  @ApiProperty()
  startYear: number;

  @ApiProperty()
  endYear: number;
}

export class GetOneClassdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class SearchClassdto {
  @ApiProperty({ example: '11A2', nullable: true })
  name: string;
}

export class DeleteClassdto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
