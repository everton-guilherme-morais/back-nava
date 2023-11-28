import { Controller, Get } from '@nestjs/common';
import { FakePeapleService } from './peaple.service';
import { FakePeapleDto } from '../peaple/dto/peaple-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('peaple')
export class FakePeapleController {
  constructor(private readonly fakeDataService: FakePeapleService) {}

  @ApiTags('peaple')
  @Get()
  getFakeData(): FakePeapleDto {
    return this.fakeDataService.generateFakeData();
  }
}
