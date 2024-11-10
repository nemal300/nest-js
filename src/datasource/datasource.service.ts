import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/order.entity';
import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class DatasourceService {
  private orders: Order[] = [];
  private products: Product[] = [];
  private users: User[] = [];

  getOrders(): Order[] {
    return this.orders;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getUsers(): User[] {
    return this.users;
  }
}