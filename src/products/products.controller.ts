import { ProductsService } from './products.service';
import {
    Controller,
    Get,
    Put,
    Post,
    Delete,
    Param,
    Body
} from '@nestjs/common';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProduct: Product) {
        return this.productsService.update(+id, updateProduct);
    }

    @Post()
    create(@Body() createProduct: Product) {
        return this.productsService.create(createProduct);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
