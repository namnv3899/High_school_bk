import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Get,
  Res,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { SalaryService } from './salary.service';
import {
  GetOneSalarydto,
  SearchSalarydto,
  UpdateSalarydto,
} from './salary.dto';

@ApiTags('Salary')
@Controller('api/salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async findAll(@Query() searchSalarydto: SearchSalarydto, @Res() res) {
    try {
      const data = await this.salaryService.searchSalary(searchSalarydto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Get('one/:id')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async findOne(@Param() getOneSalarydto: GetOneSalarydto, @Res() res) {
    try {
      const data = await this.salaryService.findOneSalary(getOneSalarydto);

      if (!data) {
        throw new HttpException('Salary is not found', HttpStatus.NOT_FOUND);
      }

      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Patch()
  @ApiResponse({ status: 200, description: 'Updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async updateInfor(
    @Body() updateSalarydto: UpdateSalarydto,
    @Res() res,
  ) {
    try {
      const data = await this.salaryService.updateSalary({
        ...updateSalarydto,
      });

      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
