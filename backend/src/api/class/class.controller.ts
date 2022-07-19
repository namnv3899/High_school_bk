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
  AssignClassTeacherDto,
  ParamsUpdate,
  GetTimetableDto,
  GetClassTeacherDto,
  TimetableDto,
  UpdateTimetableParam,
  updateClassTeacher,
  UpdateClassTeacherDto,
  UpdateTimetableDto,
  ListClassOfTeacherDto,
  GetTimetableOfTeacherDto,
  classPrimaryOfTeacher,
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
  public async createClass(@Body() createClassdto: CreateClassdto, @Res() res) {
    try {
      const data = await this.classService.createClass(createClassdto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('timetable')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createTimetable(@Body() timetableDto: TimetableDto, @Res() res) {
    try {
      const data = await this.classService.createTimetable(timetableDto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Patch('timetable/:classId')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async Timetable(
    @Param() classId: UpdateTimetableParam,
    @Body() updateTimetableDto: UpdateTimetableDto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.updateTimetable({
        ...updateTimetableDto,
        ...classId,
      });
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('timetable/:classId')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async getTimetable(
    @Param() getTimetableDto: GetTimetableDto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.getTimetable(getTimetableDto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('timetableOfTeacher')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async getTimetableOfTeacher(
    @Query() getTimetableOfTeacherDto: GetTimetableOfTeacherDto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.getTimetableOfTeacher(
        getTimetableOfTeacherDto,
      );
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('listClassOfTeacher/:teacherId')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async listClassOfTeacher(
    @Param() listClassOfTeacherDto: ListClassOfTeacherDto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.listClassOfTeacher(
        listClassOfTeacherDto,
      );
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('assignClassTeacher')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async assignClassTeacher(
    @Body() assignClassTeacherDto: AssignClassTeacherDto,
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
  @Patch('assignClassTeacher/:classId')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async updateClassTeacher(
    @Body() updateClassTeacherDto: UpdateClassTeacherDto,
    @Res() res,
    @Param() param: updateClassTeacher,
  ) {
    console.log(param);

    try {
      const data = await this.classService.updateClassTeacher(
        updateClassTeacherDto,
      );
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('classTeacher/:classId')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async getClassTeacher(
    @Param() getClassTeacherDto: GetClassTeacherDto,
    @Res() res,
  ) {
    try {
      const data = await this.classService.getClassTeacher(getClassTeacherDto);
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
  @Get('classPrimaryOfTeacher/:teacherId')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async classPrimaryOfTeacher(
    @Param() getOneClassdto: classPrimaryOfTeacher,
    @Res() res,
  ) {
    try {
      const data = await this.classService.classPrimaryOfTeacher(
        getOneClassdto,
      );

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
        ...paramss,
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
