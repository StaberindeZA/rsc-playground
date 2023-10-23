import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Counter } from './counter.model';
import { CounterService } from './counter.service';

@Resolver(() => Counter)
export class CounterResolver {
  constructor(private counterService: CounterService) {}

  @Query(() => Counter)
  async counter(@Args('cartId', { type: () => Int }) cartId: number) {
    return this.counterService.getCounter(cartId);
  }

  @Mutation(() => Counter)
  async incrementCounterByCartId(
    @Args('cartId', { type: () => Int }) cartId: number
  ) {
    return this.counterService.incrementCounterByCartId(cartId);
  }

  @Mutation(() => Counter)
  async updateCounterByCartId(
    @Args('cartId', { type: () => Int }) cartId: number,
    @Args('counterValue', { type: () => Int }) counterValue: number
  ) {
    return this.counterService.updateCounterByCartId(cartId, counterValue);
  }
}
