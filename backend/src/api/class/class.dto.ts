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

export class GetClassTeacherDto {
  @ApiProperty()
  classId: number;
}
export class GetTimetableDto {
  @ApiProperty()
  classId: number;
}

export class TimetableDto {
  @ApiProperty({
    example: {
      subjectId: 1,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  toanHoc: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 3,
      classId: 1,
      lesson: 4,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  nguVan: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 4,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  ngoaiNgu: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 5,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  sinhHoc: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 2,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  lichSu: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 8,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  diaLy: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 9,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  gdcd: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 13,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  theDuc: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 6,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  vatLy: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 7,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  hoaHoc: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 10,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  tinHoc: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };

  @ApiProperty({
    example: {
      subjectId: 11,
      classId: 1,
      lesson: 1,
      dayOfWeek: 'Thứ 2',
      schoolYear: 2020,
      semester: 1,
    },
  })
  congNghe: {
    subjectId: number;
    classId: number;
    lesson: number;
    dayOfWeek: string;
    schoolYear: number;
    semester: number;
  };
}

export class AssignClassTeacherDto {
  @ApiProperty({
    example: {
      teacherId: 1,
      classId: 9,
    },
  })
  chuNhiem: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 1,
      classId: 9,
    },
  })
  toanHoc: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 2,
      classId: 9,
    },
  })
  nguVan: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 3,
      classId: 9,
    },
  })
  ngoaiNgu: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 4,
      classId: 9,
    },
  })
  sinhHoc: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 5,
      classId: 9,
    },
  })
  lichSu: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 6,
      classId: 9,
    },
  })
  diaLy: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 7,
      classId: 9,
    },
  })
  gdcd: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 8,
      classId: 9,
    },
  })
  theDuc: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 9,
      classId: 9,
    },
  })
  vatLy: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 10,
      classId: 9,
    },
  })
  hoaHoc: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 11,
      classId: 9,
    },
  })
  tinHoc: {
    teacherId: number;
    classId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 12,
      classId: 9,
    },
  })
  congNghe: {
    teacherId: number;
    classId: number;
  };
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

export class UpdateTimetableParam {
  @ApiProperty()
  classId: number;
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
