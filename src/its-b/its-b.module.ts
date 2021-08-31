import { Module } from '@nestjs/common';
import { ItsBController } from './its-b.controller';

@Module({
  controllers: [ItsBController]
})
export class ItsBModule {}
