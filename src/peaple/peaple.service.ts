import { Injectable } from '@nestjs/common';
import * as faker from 'faker';
import { FakePeapleDto } from '../peaple/dto/peaple-dto';

@Injectable()
export class FakePeapleService {
  generateFakeData(): FakePeapleDto {
    const fakeName = faker.name.findName();
    const fakeAge = faker.datatype.number({ min: 18, max: 99 });
    const fakeBirthdate = faker.date.past();

    const formattedBirthdate = this.formatDateBrazilian(fakeBirthdate);

    return {
      pessoa: {
        name: fakeName,
        age: fakeAge,
        birthdate: formattedBirthdate,
      },
    };
  }

  private formatDateBrazilian(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
