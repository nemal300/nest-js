import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [OrdersModule,ProductsModule, UsersModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
