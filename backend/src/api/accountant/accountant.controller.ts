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
import { AccountantService } from './accountant.service';
import {
  GetOneAccountantDto,
  AccountantRegisterDto,
  DeleteAccountantDto,
  SearchAccountantDto,
  UpdateAccountantDto,
  UpdateAccountantDtoParam,
} from './accountant.dto';

@ApiTags('Accountant')
@Controller('api/accountant')
export class AccountantController {
  constructor(private readonly accountantService: AccountantService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createAccountant(
    @Body() accountantRegisterDto: AccountantRegisterDto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.createAccountant(
        accountantRegisterDto,
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
  public async findAll(
    @Query() searchAccountantDto: SearchAccountantDto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.searchAccountant(
        searchAccountantDto,
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
    @Param() getOneAccountantDto: GetOneAccountantDto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.findOneAccountant(
        getOneAccountantDto,
      );

      if (!data) {
        throw new HttpException(
          'Accountant is not found',
          HttpStatus.NOT_FOUND,
        );
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
    @Body() updateAccountantDto: UpdateAccountantDto,
    @Res() res,
    @Req() req,
    @Param() param: UpdateAccountantDtoParam,
  ) {
    try {
      const data = await this.accountantService.updateAccountant({
        ...updateAccountantDto,
        param,
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
  public async removeAccountant(
    @Param() deleteAccountantDto: DeleteAccountantDto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.removeAccountant(
        deleteAccountantDto,
      );
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
