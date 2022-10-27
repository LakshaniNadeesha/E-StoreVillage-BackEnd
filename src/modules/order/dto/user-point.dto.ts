import { ApiProperty } from "@nestjs/swagger";

export class CreateUserPointDto {
  @ApiProperty()
  point_type: string;

  @ApiProperty()
  point_order: number;

  @ApiProperty()
  orderId: number;
}
