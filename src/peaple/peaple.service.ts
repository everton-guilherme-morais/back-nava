import { Injectable } from '@nestjs/common';
import * as faker from 'faker';
import { FakePeapleDto } from '../peaple/dto/peaple-dto';

@Injectable()
export class FakePeapleService {
  generateFakeData(): FakePeapleDto {
    return {
      peaple: {
        name: faker.name.findName(),
        age: faker.datatype.number({ min: 18, max: 99 }),
        birthdate: new Date(faker.date.past()).toLocaleDateString('pt-BR'),
      },
    };
  }
}
