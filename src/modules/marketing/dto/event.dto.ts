import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PageRequest } from "src/core/pagination";

export class CreateEventDto {
  @ApiProperty()
  name?: string;

<<<<<<< HEAD
  @ApiProperty()
  image: string;


=======
>>>>>>> 82a35c3fab1e1139f3c5b8ccf6746be7a029286d
  @ApiPropertyOptional()
  discription?: string;

  @ApiPropertyOptional()
  date: Date;

}

export class FilterEventDto extends PageRequest {}

export class UpdateEventDto {}
