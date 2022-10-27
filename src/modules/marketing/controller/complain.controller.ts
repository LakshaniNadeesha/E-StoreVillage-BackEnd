import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IPagination, Pager } from "src/core/pagination";
import { JwtAuthGuard } from "src/modules/auth/guards";
import { CreateComplainDto, CreateComplainReplyDto, FilterComplainDto, UpdateComplainDto } from "../dto/complain.dto";
import { ComplainService } from "../services/complain.service";

@Controller("complain")
@ApiTags("Complain")
// @UseGuards(JwtAuthGuard)
export class ComplainController {
  constructor(@Inject(ComplainService.name) private readonly complainService: ComplainService) { }

  @Get()
  async findAll(@Query() filter: FilterComplainDto, @Pager() page: IPagination) {
    const [data, total] = await this.complainService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createComplainDto: CreateComplainDto) {
    return this.complainService.create(createComplainDto);
  }

  @Post('reply')
  async createReply(@Body() createComplainDto: CreateComplainReplyDto) {
    console.log(createComplainDto)
    return await this.complainService.createReply(createComplainDto);
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateComplainDto: UpdateComplainDto) {
    return this.complainService.update(updateComplainDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.complainService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.complainService.deleteOneById(id);
  }
}
