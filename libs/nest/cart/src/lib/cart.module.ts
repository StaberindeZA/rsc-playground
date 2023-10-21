import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';

@Module({
  controllers: [],
  providers: [CartService, CartResolver],
  exports: [],
})
export class CartModule {}
