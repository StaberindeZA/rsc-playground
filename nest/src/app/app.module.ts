import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CartModule } from '@rsc-playground/nest/cart';

@Module({
  imports: [
    CartModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'nest/src/schema.gql'),
      include: [CartModule],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
