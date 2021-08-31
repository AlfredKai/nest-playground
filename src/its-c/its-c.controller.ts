import { Controller, Get } from '@nestjs/common';
import { ServiceC } from './service-c';

@Controller('its-c')
export class ItsCController {
  constructor(private readonly serviceC: ServiceC) {}

  @Get()
  getHello(): string {
    return this.serviceC.getMessage();
  }
}
