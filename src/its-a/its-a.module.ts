import { Module } from '@nestjs/common';
import { ItsAController } from './its-a.controller';

@Module({
  controllers: [ItsAController]
})
export class ItsAModule {}
