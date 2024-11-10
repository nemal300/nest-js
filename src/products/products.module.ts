import { Module } from '@nestjs/common';
import { Product } from './product.entity'
import { ProductsService } from './products.service';
import { ProductController } from './products.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [ProductController],
  providers: [ProductsService],
  imports: [Product, DatasourceModule],
})
export class ProductsModule {}
