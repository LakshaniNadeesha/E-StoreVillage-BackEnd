import { ApiProperty } from "@nestjs/swagger";
import { PageRequest } from "src/core/pagination";

export class CreateOrderDto {
  @ApiProperty()
  items?: [string];

  @ApiProperty()
  subtotal?: number;

  @ApiProperty()
  paid?: number;

  @ApiProperty()
  user: number;
}
export class FilterOrderDto extends PageRequest {}

export class UpdateOrderDto extends CreateOrderDto {}
