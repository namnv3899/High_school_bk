import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetOneSalarydto {
  @ApiProperty()
  @IsNotEmpty()
  teacherId: number;
}

export class UpdateSalarydto {
  @ApiProperty()
  @IsNotEmpty()
  teacherId: number;
}

export class SearchSalarydto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteSalarydto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
