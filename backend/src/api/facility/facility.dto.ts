import { ApiProperty } from '@nestjs/swagger';

export class CreateFacilitydto {
  @ApiProperty({ example: 'Seas' })
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  timeIn: Date;

  @ApiProperty()
  status: string;
}

export class UpdateFacilitydtoParam {
  @ApiProperty()
  id: string;
}
export class UpdateFacilitydto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  location: string;
}

export class GetOneFacilitydto {
  @ApiProperty()
  id: number;
}

export class SearchFacilitydto {
  @ApiProperty({ example: 'Nam', nullable: true })
  name: string;
}

export class DeleteFacilitydto {
  @ApiProperty()
  id: number;
}
