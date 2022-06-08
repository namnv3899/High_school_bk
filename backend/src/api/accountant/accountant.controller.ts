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
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { AccountantService } from './accountant.service';
import {
  GetOneAccountantdto,
  AccountantRegisterdto,
  DeleteAccountantdto,
  SearchAccountantdto,
  UpdateAccountantdto,
} from './accountant.dto';

@ApiTags('Accountant')
@Controller('api/accountant')
export class AccountantController {
  constructor(private readonly accountantService: AccountantService) {}

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createAccountant(
    @Query() accountantRegisterdto: AccountantRegisterdto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.createAccountant(
        accountantRegisterdto,
      );
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async findAll(
    @Query() searchAccountantdto: SearchAccountantdto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.searchAccountant(
        searchAccountantdto,
      );
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
  public async findOne(
    @Param() getOneAccountantdto: GetOneAccountantdto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.findOneAccountant(
        getOneAccountantdto,
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

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Patch()
  @ApiResponse({ status: 200, description: 'Updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async updateInfor(
    @Body() updateAccountantdto: UpdateAccountantdto,
    @Res() res,
    @Req() req,
  ) {
    const { id } = req.user;
    try {
      const data = await this.accountantService.updateAccountant({
        ...updateAccountantdto,
        id,
      });

      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async removeAccountant(
    @Param() deleteAccountantdto: DeleteAccountantdto,
    @Res() res,
  ) {
    try {
      const data = await this.accountantService.removeAccountant(
        deleteAccountantdto,
      );
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
