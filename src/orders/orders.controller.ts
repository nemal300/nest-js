import { OrdersService } from './orders.service';
import {
    Controller,
    Get,
    Put,
    Post,
    Delete,
    Param,
    Body
} from '@nestjs/common';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get()
    findAll() {
        return this.ordersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordersService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrder: Order) {
        return this.ordersService.update(+id, updateOrder);
    }

    @Post()
    create(@Body() createOrder: Order) {
        return this.ordersService.create(createOrder);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordersService.remove(+id);
    }
}
