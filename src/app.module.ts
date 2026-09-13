import { Module } from '@nestjs/common';
import { TempController } from './temp.controller.js';

@Module({
  imports: [],
  controllers: [TempController],
  providers: [],
})
export class AppModule {}
