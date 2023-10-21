import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cart {
  @Field((type) => Int)
  id: number;

  @Field()
  apiId: string;

  @Field((type) => Int)
  createdAt: number;
}
