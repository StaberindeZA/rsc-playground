import { Injectable } from '@nestjs/common';
import { Cart } from './cart.model';
const data: Cart[] = [
  {
    id: 1,
    apiId: 'vpn',
    createdAt: 1697902196,
    counter: 5,
  },
];

@Injectable()
export class CartService {
  async getCart(id: number): Promise<Cart> {
    return data.find((cart) => cart.id === id) || data[0];
  }

  async updateCounter(id: number, counterValue: number): Promise<Cart> {
    const cartIndex = data.findIndex((cart) => cart.id === id);
    data[cartIndex].counter = counterValue;
    return data[cartIndex];
  }
}
