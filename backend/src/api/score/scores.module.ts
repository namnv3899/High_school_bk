import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ScoreController } from './scores.controller';
import { StudentSubject } from './scores.entity';
import { ScoreService } from './scores.service';

@Module({
  controllers: [ScoreController],
  imports: [TypeOrmModule.forFeature([StudentSubject]), AuthModule],
  exports: [ScoreService],
  providers: [ScoreService],
})
export class ScoreModule {}
