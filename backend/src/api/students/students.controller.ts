import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  // UseGuards,
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
import { StudentsService } from './students.service';
import {
  UpdateStudentdto,
  DeleteStudentdto,
  GetOneStudentdto,
  SearchStudentdto,
  StudentRegisterdto,
  UpdateStudentParam,
  StudentInClassDto,
} from './students.dto';

@ApiTags('Student')
@Controller('api/student')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createStudent(
    @Body() studentRegisterdto: StudentRegisterdto,
    @Res() res,
  ) {
    try {
      const data = await this.studentsService.createStudent(studentRegisterdto);
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
    @Query() searchStudentdto: SearchStudentdto,
    @Res() res,
  ) {
    try {
      const data = await this.studentsService.searchStudent(searchStudentdto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get(':classId')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async getAllStudentInClass(
    @Param() studentInClassDto: StudentInClassDto,
    @Res() res,
  ) {
    try {
      const data = await this.studentsService.getAllStudentInClass(
        studentInClassDto,
      );
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
    @Param() getOneStudentdto: GetOneStudentdto,
    @Res() res,
  ) {
    try {
      const data = await this.studentsService.findOneStudent(getOneStudentdto);

      if (!data) {
        throw new HttpException('Student is not found', HttpStatus.NOT_FOUND);
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
    @Body() updateStudentdto: UpdateStudentdto,
    @Res() res,
    @Req() req,
    @Param() param: UpdateStudentParam,
  ) {
    try {
      const data = await this.studentsService.updateStudent({
        ...updateStudentdto,
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
  public async removeStudent(
    @Param() deleteStudentdto: DeleteStudentdto,
    @Res() res,
  ) {
    try {
      const data = await this.studentsService.removeStudent(deleteStudentdto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
