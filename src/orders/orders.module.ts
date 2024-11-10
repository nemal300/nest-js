import { Module } from '@nestjs/common';
import { Order } from './order.entity'
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [Order, DatasourceModule],
})
export class OrdersModule {}
