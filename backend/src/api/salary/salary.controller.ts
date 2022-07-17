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
  UseGuards,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { SalaryService } from './salary.service';
import {
  GetOneSalaryDto,
  CreateSalaryDto,
  SearchSalaryDto,
  UpdateSalaryDto,
} from './salary.dto';

@ApiTags('Salary')
@Controller('api/salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createSalary(
    @Body() createSalaryDto: CreateSalaryDto,
    @Res() res,
  ) {
    try {
      const data = await this.salaryService.createSalary(createSalaryDto);
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
  public async findAll(@Query() searchSalaryDto: SearchSalaryDto, @Res() res) {
    try {
      const data = await this.salaryService.searchSalary();
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
  public async findOne(@Param() getOneSalaryDto: GetOneSalaryDto, @Res() res) {
    try {
      const data = await this.salaryService.findOneSalary(getOneSalaryDto);

      if (!data) {
        throw new HttpException('Salary is not found', HttpStatus.NOT_FOUND);
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
  public async updateInfor(
    @Body() updateSalaryDto: UpdateSalaryDto,
    @Res() res,
  ) {
    try {
      const data = await this.salaryService.updateSalary({
        ...updateSalaryDto,
      });

      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
