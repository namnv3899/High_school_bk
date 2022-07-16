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
  subject: number;

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
  @ApiProperty({ example: 'Iris123333' })
  username: string;

  @ApiProperty({ example: 'Nguyen Van Nam 2' })
  name: string;

  @ApiProperty({ example: 'iris12223@gmail.com' })
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  dateOfBirth: Date;

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

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteTeacherdto {
  @ApiProperty()
  id: number;
}
