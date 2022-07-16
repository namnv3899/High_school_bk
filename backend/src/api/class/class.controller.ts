import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Delete,
  Get,
  Res,
  Param,
  Patch,
  Query,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ClassService } from './class.service';
import {
  UpdateClassdto,
  CreateClassdto,
  GetOneClassdto,
  SearchClassdto,
  DeleteClassdto,
  TimetableDto,
  AssignClassTeacherDto,
  ParamsUpdate,
} from './class.dto';

@ApiTags('Class')
@Controller('api/class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createTeacher(
    @Query() createClassdto: CreateClassdto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.createClass(createClassdto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @Post('timetable')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createTimetable(
    @Query() timetableDto: TimetableDto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.createTimetable(timetableDto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @Post('assignClassTeacher')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async assignClassTeacher(
    @Query() assignClassTeacherDto: AssignClassTeacherDto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.assignClassTeacher(
        assignClassTeacherDto,
      );
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
  public async findAll(@Query() searchClassdto: SearchClassdto, @Res() res) {
    try {
      const data = await this.classService.searchClass(searchClassdto);
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
  public async findOne(@Param() getOneClassdto: GetOneClassdto, @Res() res) {
    try {
      const data = await this.classService.findOneClass(getOneClassdto);

      if (!data) {
        throw new HttpException('Class is not found', HttpStatus.NOT_FOUND);
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
    @Body() updateClassdto: UpdateClassdto,
    @Res() res,
    @Param() paramss: ParamsUpdate,
  ) {
    try {
      const data = await this.classService.updateClass({
        ...updateClassdto,
        paramss,
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
  public async removeClass(
    @Param() deleteClassdto: DeleteClassdto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.removeClass(deleteClassdto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
