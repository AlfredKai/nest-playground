import { Module } from '@nestjs/common';
import { ItsCController } from './its-c.controller';
import { ServiceC } from './service-c';

@Module({
  controllers: [ItsCController],
  providers: [ServiceC],
})
export class ItsCModule {}
