import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterResolver } from './counter.resolver';

@Module({
  controllers: [],
  providers: [CounterService, CounterResolver],
  exports: [],
})
export class CounterModule {}
