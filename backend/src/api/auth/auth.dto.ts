import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class Logindto {
  @ApiProperty({ example: 'Iris123' })
  username: string;

  @ApiProperty({ example: 'iris123@gmail.com' })
  email: string;

  @ApiProperty({
    example: 'One of: Student / Teacher / Accountant / Admin / Parent',
  })
  role: string;

  @ApiProperty()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
