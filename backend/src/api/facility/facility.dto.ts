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

export class UpdateFacilitydto {
  @ApiProperty()
  id: number;
}

export class GetOneFacilitydto {
  @ApiProperty()
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
  id: number;
}
