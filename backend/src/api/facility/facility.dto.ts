import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateFacilitydto {
  @ApiProperty()
  @IsNotEmpty()
  classId: number;

  @ApiProperty({ example: 'Seas' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  total: number;

  @ApiProperty()
  @IsNotEmpty()
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  timeIn: Date;

  @ApiProperty()
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  status: string;
}

export class UpdateFacilitydto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class GetOneFacilitydto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class SearchFacilitydto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  take: number;

  @ApiProperty({ nullable: true })
  page: number;
}

export class DeleteFacilitydto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
