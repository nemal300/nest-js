import { ApiProperty } from '@nestjs/swagger';

export class Order {
  @ApiProperty()
  id: number;

  @ApiProperty()
  id_user: number;

  @ApiProperty()
  id_product: number;

  @ApiProperty()
  status: number;
}