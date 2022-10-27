import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class FilterUserDto {
 
  @ApiPropertyOptional()
  @ApiProperty()
  readonly category?: number;
}
