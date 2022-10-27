import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PageRequest } from "src/core/pagination";

export class CreateItemReviewDto {
  @ApiProperty()
  item_id: number;

  @ApiPropertyOptional()
  review?: string;
}

export class FilterItemReviewDto extends PageRequest {}

export class UpdateItemReviewDto {}
