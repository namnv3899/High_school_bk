import {
  Controller,
  Get,
  Res,
  Patch,
  Query,
  UseGuards,
  Post,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateScoreDto,
  AverageScoreDto,
  UpdateScoreDto,
  GetScoreDto,
  DeleteScoreDto,
} from './scores.dto';
import { ScoreService } from './scores.service';

@ApiTags('Score')
@Controller('api/score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async createScore(
    @Query() createScoreDto: CreateScoreDto,
    @Res() res,
  ) {
    try {
      const data = await this.scoreService.createScore(createScoreDto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Patch()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async updateScore(
    @Query() updateScoreDto: UpdateScoreDto,
    @Res() res,
  ) {
    try {
      const data = await this.scoreService.updateScore(updateScoreDto);
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
  public async getScore(@Query() getScoreDto: GetScoreDto, @Res() res) {
    try {
      const data = await this.scoreService.getScore(getScoreDto);
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
  public async averageScore(
    @Query() averageScoreDto: AverageScoreDto,
    @Res() res,
  ) {
    try {
      const data = await this.scoreService.averageScore(averageScoreDto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async deleteScore(
    @Query() deleteScoreDto: DeleteScoreDto,
    @Res() res,
  ) {
    try {
      const data = await this.scoreService.deleteScore(deleteScoreDto);
      res.json({ data });
    } catch (error) {
      throw error;
    }
  }
}
