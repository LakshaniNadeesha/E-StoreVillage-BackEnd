import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PageRequest } from "src/core/pagination";

export class CreateCategoryDto {
  @ApiProperty()
  name?: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  image: string;

  // @ApiPropertyOptional()
  // parentCategoryID: number;

  @ApiPropertyOptional()
  status: number;
}

export class FilterCategoryDto extends PageRequest { }

export class UpdateCategoryDto { }
