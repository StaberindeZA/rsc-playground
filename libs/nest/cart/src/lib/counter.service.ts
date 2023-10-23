import { Injectable } from '@nestjs/common';
import { Counter } from './counter.model';

const data: Counter[] = [
  {
    id: 1,
    cartId: 1,
    counter: 0,
  },
];

@Injectable()
export class CounterService {
  async getCounter(cartId: number): Promise<Counter> {
    return data.find((counter) => counter.cartId === cartId) || data[0];
  }

  async incrementCounterByCartId(cartId: number): Promise<Counter> {
    const counterIndex = data.findIndex((counter) => counter.cartId === cartId);
    data[counterIndex].counter = data[counterIndex].counter + 1;
    return data[counterIndex];
  }

  async updateCounterByCartId(
    cartId: number,
    counterValue: number
  ): Promise<Counter> {
    const counterIndex = data.findIndex((counter) => counter.cartId === cartId);
    data[counterIndex].counter = counterValue;
    return data[counterIndex];
  }
}
