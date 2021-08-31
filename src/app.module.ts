import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItsAModule } from './its-a/its-a.module';
import { ItsBModule } from './its-b/its-b.module';
import { ItsCModule } from './its-c/its-c.module';

@Module({
  imports: [ItsAModule, ItsBModule, ItsCModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
