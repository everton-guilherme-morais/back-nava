import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FakePeapleController } from './peaple/peaple.controller';
import { FakePeapleService } from './peaple/peaple.service';

@Module({
  imports: [],
  controllers: [AppController, FakePeapleController],
  providers: [AppService, FakePeapleService],
})
export class AppModule {}
