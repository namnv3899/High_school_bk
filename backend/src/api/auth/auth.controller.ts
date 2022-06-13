import { Body, Controller, Res, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({ status: 201, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  public async Login(@Body() loginDto: LoginDto, @Res() res) {
    try {
      const data = await this.authService.login(loginDto);
      res.json({ accessToken: data });
    } catch (error) {
      throw error;
    }
  }
}
