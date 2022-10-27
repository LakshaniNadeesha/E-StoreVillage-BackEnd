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
import {
  CreateNotifySubscribeDto,
  FilterNotifySubscribeDto,
  UpdateNotifySubscribeDto,
} from "../dto/notify-subscribe.dto";
import { NotifySubscribeService } from "../services/notify-subscribe.service";

@Controller("NotifySubscribe")
@ApiTags("NotifySubscribe")
@UseGuards(JwtAuthGuard)
export class NotifySubscribeController {
  constructor(@Inject(NotifySubscribeService.name) private readonly notifySubscribeService: NotifySubscribeService) {}

  @Get()
  async findAll(@Query() filter: FilterNotifySubscribeDto, @Pager() page: IPagination) {
    const [data, total] = await this.notifySubscribeService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createNotifySubscribeDto: CreateNotifySubscribeDto) {
    return this.notifySubscribeService.create(createNotifySubscribeDto);
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateNotifySubscribeDto: UpdateNotifySubscribeDto) {
    return this.notifySubscribeService.update(updateNotifySubscribeDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.notifySubscribeService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.notifySubscribeService.deleteOneById(id);
  }
}
