import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cart } from './cart.model';
import { CartService } from './cart.service';

@Resolver(() => Cart)
export class CartResolver {
  constructor(private cartService: CartService) {}

  @Query(() => Cart)
  async cart(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.getCart(id);
  }

  @Mutation(() => Cart)
  async incrementCounter(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.incrementCounter(id);
  }

  @Mutation(() => Cart)
  async updateCounter(
    @Args('id', { type: () => Int }) id: number,
    @Args('counterValue', { type: () => Int }) counterValue: number
  ) {
    return this.cartService.updateCounter(id, counterValue);
  }
}
