import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Cart } from './cart.model';
import { CartService } from './cart.service';

@Resolver(() => Cart)
export class CartResolver {
  constructor(private cartService: CartService) {}

  @Query(() => Cart)
  async cart(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.getCart(id);
  }
}
