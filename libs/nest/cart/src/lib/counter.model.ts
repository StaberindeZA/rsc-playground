import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cart } from './cart.model';

@ObjectType()
export class Counter {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  cartId: number;

  @Field((type) => Int)
  counter: number;
}
