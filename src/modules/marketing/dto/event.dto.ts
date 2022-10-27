import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PageRequest } from "src/core/pagination";

export class CreateEventDto {
  @ApiProperty()
  name?: string;

  @ApiPropertyOptional()
  discription?: string;

  @ApiPropertyOptional()
  date: Date;

}

export class FilterEventDto extends PageRequest {}

export class UpdateEventDto {}
