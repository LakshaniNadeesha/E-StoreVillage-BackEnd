import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PageRequest } from "src/core/pagination";

export class CreateItemDto {
  @ApiPropertyOptional()
  brand_id?: number;

  @ApiPropertyOptional()
  category_id?: number;

  @ApiProperty()
  name?: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  image: string;

  @ApiPropertyOptional()
  point: number;

  @ApiPropertyOptional()
  price_sale: number;

  @ApiPropertyOptional()
  price_discount: number;

  @ApiPropertyOptional()
  discount_rate: number;

  @ApiPropertyOptional()
  qty: number;
  
  @ApiPropertyOptional()
  createdBy: number;
}

export class FilterItemDto extends PageRequest { }

export class UpdateItemDto extends CreateItemDto { }
