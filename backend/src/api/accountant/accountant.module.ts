import { Module } from '@nestjs/common';
import { AccountantService } from './accountant.service';
import { AccountantController } from './accountant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Accountant } from './accountant.entity';

@Module({
  controllers: [AccountantController],
  imports: [TypeOrmModule.forFeature([Accountant]), AuthModule],
  exports: [AccountantService],
  providers: [AccountantService],
})
export class AccountantModule {}
