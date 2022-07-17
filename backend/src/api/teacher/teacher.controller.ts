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
import { TeacherService } from './teacher.service';
import {
  TeacherRegisterdto,
  SearchTeacherdto,
  GetOneTeacherdto,
  UpdateTeacherdto,
  DeleteTeacherdto,
} from './teacher.dto';

@ApiTags('Teacher')
@Controller('api/teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createTeacher(
    @Body() teacherRegisterdto: TeacherRegisterdto,
    @Res() res,
  ) {
    try {
      const data = await this.teacherService.createTeacher(teacherRegisterdto);
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
    @Query() searchTeacherdto: SearchTeacherdto,
    @Res() res,
  ) {
    try {
      const data = await this.teacherService.searchTeacher(searchTeacherdto);
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
    @Param() getOneTeacherdto: GetOneTeacherdto,
    @Res() res,
  ) {
    try {
      const data = await this.teacherService.findOneTeacher(getOneTeacherdto);

      if (!data) {
        throw new HttpException('Teacher is not found', HttpStatus.NOT_FOUND);
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
  public async updateTeacher(
    @Body() updateTeacherdto: UpdateTeacherdto,
    @Res() res,
    @Req() req,
    @Param() params: any,
  ) {
    try {
      const data = await this.teacherService.updateTeacher({
        ...updateTeacherdto,
        params,
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
  public async removeTeacher(
    @Param() deleteOneTeacher: DeleteTeacherdto,
    @Res() res,
  ) {
    try {
      const data = await this.teacherService.removeTeacher(deleteOneTeacher);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
