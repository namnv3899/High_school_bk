import { ApiProperty } from '@nestjs/swagger';

export class StudentRegisterdto {
  @ApiProperty()
  classId: number;

  @ApiProperty({ example: 'Iris123' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam' })
  name: string;

  @ApiProperty({ example: 'iris123@gmail.com' })
  email: string;

  @ApiProperty({ example: 'Nam123' })
  password: string;

  @ApiProperty({ example: 'Nam123' })
  sex: string;

  @ApiProperty({ example: '2021-02-19' })
  dateOfBirth: Date;

  @ApiProperty({ example: '2021-02-19' })
  address: string;

  @ApiProperty({ example: 243242473 })
  phone: number;

  @ApiProperty({ example: '2021-02-19' })
  startStudying: Date;

  @ApiProperty({ example: '20rwtr9' })
  fatherName: string;

  @ApiProperty({ example: '20rwtr9' })
  fatherJob: string;

  @ApiProperty({ example: 4324214 })
  fatherPhone: number;

  @ApiProperty({ example: '1943-09-03' })
  fatherDateOfBirth: Date;

  @ApiProperty({ example: '31 ngo Duy Hung, tp Ha Noi' })
  fatherJobAddress: string;

  @ApiProperty({ example: 'Noi' })
  motherName: string;

  @ApiProperty({ example: 'fsadfsdfi' })
  motherJob: string;

  @ApiProperty({ example: 243242473 })
  motherPhone: number;

  @ApiProperty({ example: '1943-09-03' })
  motherDateOfBirth: Date;

  @ApiProperty({ example: '31 ngo Duy Hung, tp Ha Noi' })
  motherJobAddress: string;
}

export class UpdateStudentParam {
  @ApiProperty()
  id: number;
}

export class StudentInClassDto {
  @ApiProperty()
  classId: number;
}
export class GetOneStudentdto {
  @ApiProperty()
  id: number;
}

export class UpdateStudentdto {
  @ApiProperty()
  classId: number;

  @ApiProperty({ example: 'Iris123' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam' })
  name: string;

  @ApiProperty({ example: 'nam234' })
  password: string;

  @ApiProperty({ example: 'iris123@gmail.com' })
  email: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  startStudying: Date;

  @ApiProperty()
  endStudying: Date;

  @ApiProperty()
  fatherName: string;

  @ApiProperty()
  fatherJob: string;

  @ApiProperty()
  fatherPhone: number;

  @ApiProperty()
  fatherDateOfBirth: Date;

  @ApiProperty()
  fatherJobAddress: string;

  @ApiProperty()
  motherName: string;

  @ApiProperty()
  motherJob: string;

  @ApiProperty()
  motherPhone: number;

  @ApiProperty()
  motherDateOfBirth: Date;

  @ApiProperty()
  motherJobAddress: string;

  @ApiProperty()
  schoolYear: number;
}

export class SearchStudentdto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;
}

export class DeleteStudentdto {
  @ApiProperty()
  id: number;
}
