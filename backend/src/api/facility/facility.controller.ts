import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Delete,
  Get,
  Res,
  Param,
  Req,
  Patch,
  Query,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FacilityService } from './facility.service';
import {
  UpdateFacilitydto,
  CreateFacilitydto,
  DeleteFacilitydto,
  GetOneFacilitydto,
  SearchFacilitydto,
  UpdateFacilitydtoParam,
} from './facility.dto';

@ApiTags('Facility')
@Controller('api/facility')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createFacility(
    @Body() createFacilitydto: CreateFacilitydto,
    @Res() res,
  ) {
    try {
      const data = await this.facilityService.createFacility(createFacilitydto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async findAll(
    @Query() searchFacilitydto: SearchFacilitydto,
    @Res() res,
  ) {
    try {
      const data = await this.facilityService.searchFacility(searchFacilitydto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('one/:id')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async findOne(
    @Param() getOneFacilitydto: GetOneFacilitydto,
    @Res() res,
  ) {
    try {
      const data = await this.facilityService.findOneFacility(
        getOneFacilitydto,
      );

      if (!data) {
        throw new HttpException('Facility is not found', HttpStatus.NOT_FOUND);
      }

      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async updateFacility(
    @Body() updateFacilitydto: UpdateFacilitydto,
    @Res() res,
    @Req() req,
    @Param() param: UpdateFacilitydtoParam,
  ) {
    try {
      const data = await this.facilityService.updateFacility({
        ...updateFacilitydto,
        ...param,
      });

      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async removeFacility(
    @Param() deleteFacilitydto: DeleteFacilitydto,
    @Res() res,
  ) {
    try {
      const data = await this.facilityService.removeFacility(deleteFacilitydto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
