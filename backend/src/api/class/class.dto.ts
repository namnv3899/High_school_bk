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

export class UpdateTimetableDto {
  @ApiProperty()
  lesson: number;

  @ApiProperty()
  monday: string;

  @ApiProperty()
  tuesday: string;

  @ApiProperty()
  wednesday: string;

  @ApiProperty()
  thursday: string;

  @ApiProperty()
  friday: string;

  @ApiProperty()
  saturday: string;
}

export class TimetableDto {
  @ApiProperty()
  classId: number;

  @ApiProperty()
  lesson: number;

  @ApiProperty({ example: 'Ngữ văn' })
  monday: string;

  @ApiProperty({ example: 'Toán học' })
  tuesday: string;

  @ApiProperty({ example: 'Vật lý' })
  wednesday: string;

  @ApiProperty({ example: 'Hóa học' })
  thursday: string;

  @ApiProperty({ example: 'Toán học' })
  friday: string;

  @ApiProperty({ example: 'Ngữ văn' })
  saturday: string;
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

export class GetTimetableOfTeacherDto {
  @ApiProperty({ example: 'Ngữ văn' })
  subject: string;
}

export class ListClassOfTeacherDto {
  @ApiProperty()
  teacherId: number;
}

export class UpdateClassTeacherDto {
  @ApiProperty({
    example: {
      teacherId: 14,
      classteacherId: 1,
    },
  })
  chuNhiem: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 1,
      classteacherId: 2,
    },
  })
  toanHoc: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 2,
      classteacherId: 3,
    },
  })
  nguVan: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 3,
      classteacherId: 5,
    },
  })
  ngoaiNgu: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 4,
      classteacherId: 6,
    },
  })
  sinhHoc: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 5,
      classteacherId: 1,
    },
  })
  lichSu: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 6,
      classteacherId: 1,
    },
  })
  diaLy: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 7,
      classteacherId: 1,
    },
  })
  gdcd: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 8,
      classteacherId: 1,
    },
  })
  theDuc: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 9,
      classteacherId: 1,
    },
  })
  vatLy: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 10,
      classteacherId: 1,
    },
  })
  hoaHoc: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 11,
      classteacherId: 1,
    },
  })
  tinHoc: {
    teacherId: number;
    classteacherId: number;
  };

  @ApiProperty({
    example: {
      teacherId: 12,
      classteacherId: 1,
    },
  })
  congNghe: {
    teacherId: number;
    classteacherId: number;
  };
}

export class updateClassTeacher {
  @ApiProperty({ example: 1 })
  classId: string;
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

export class classPrimaryOfTeacher {
  @ApiProperty({ example: 1 })
  teacherId: string;
}

export class SearchClassdto {
  @ApiProperty({ example: '11A2', nullable: true })
  name: string;
}

export class DeleteClassdto {
  @ApiProperty()
  id: number;
}
