import { Controller, Get } from '@nestjs/common';
import { FakePeapleService } from './peaple.service';
import { FakePeapleDto } from '../peaple/dto/peaple-dto';

@Controller('pessoa')
export class FakePeapleController {
  constructor(private readonly fakeDataService: FakePeapleService) {}

  @Get()
  getFakeData(): FakePeapleDto {
    return this.fakeDataService.generateFakeData();
  }
}
