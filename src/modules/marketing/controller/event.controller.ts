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
import { CreateEventDto, FilterEventDto, UpdateEventDto } from "../dto/event.dto";
import { EventService } from "../services/Event.service";

@Controller("event")
@ApiTags("Event")
@UseGuards(JwtAuthGuard)
export class EventController {
  constructor(@Inject(EventService.name) private readonly EventService: EventService) {}

  @Get()
  async findAll(@Query() filter: FilterEventDto, @Pager() page: IPagination) {
    const [data, total] = await this.EventService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return this.EventService.create(createEventDto);
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateEventDto: UpdateEventDto) {
    return this.EventService.update(updateEventDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.EventService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.EventService.deleteOneById(id);
  }
}
