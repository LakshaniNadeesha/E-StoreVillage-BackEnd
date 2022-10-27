import { ApiProperty } from "@nestjs/swagger";
import { PageRequest } from "src/core/pagination";

export class CreateComplainDto {
    @ApiProperty()
    user: number;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    complain: string;
}

export class CreateComplainReplyDto {
   
    @ApiProperty()
    user?: string;

    @ApiProperty()
    complain_reply: string;
}


export class FilterComplainDto extends PageRequest { }

export class UpdateComplainDto { }
