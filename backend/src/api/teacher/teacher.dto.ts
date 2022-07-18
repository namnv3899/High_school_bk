import { ApiProperty } from '@nestjs/swagger';

export class TeacherRegisterdto {
  @ApiProperty({ example: 'Hung' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Hung' })
  name: string;

  @ApiProperty({ example: 'hung@gmail.com' })
  email: string;

  @ApiProperty()
  salary: number;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  sex: string;

  @ApiProperty({ example: '1943-09-03' })
  dateOfBirth: Date;

  @ApiProperty({ example: '31 ngo Duy Hung, tp Ha Noi' })
  address: string;

  @ApiProperty({ example: 243242473 })
  phone: number;

  @ApiProperty({ example: '2021-02-19' })
  startWorking: Date;

  @ApiProperty({ example: '2021-02-19' })
  endWorking: Date;
}

export class UpdateTeacherdto {
  @ApiProperty({ example: 'Nam123' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam 2' })
  name: string;

  @ApiProperty({ example: 'Nam@gmail.com' })
  email: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty({ example: 'nam234' })
  password: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  startWorking: Date;

  @ApiProperty()
  endWorking: Date;
}

export class GetOneTeacherdto {
  @ApiProperty()
  id: number;
}

export class SearchTeacherdto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;
}

export class DeleteTeacherdto {
  @ApiProperty()
  id: number;
}
