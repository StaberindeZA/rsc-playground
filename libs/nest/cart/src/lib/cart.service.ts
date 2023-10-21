import { Injectable } from '@nestjs/common';
import { Cart } from './cart.model';
const data: Cart[] = [
  {
    id: 1,
    apiId: 'vpn',
    createdAt: 1697902196,
  },
];

const defaultCart = {
  id: 2,
  apiId: 'default',
  createdAt: 1697902196,
};

@Injectable()
export class CartService {
  async getCart(id: number): Promise<Cart> {
    return data.find((cart) => cart.id === id) || defaultCart;
  }
}
