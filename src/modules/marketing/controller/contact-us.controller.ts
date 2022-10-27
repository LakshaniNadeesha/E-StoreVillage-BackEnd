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
import { CreateContactUsDto, FilterContactUsDto, UpdateContactUsDto } from "../dto/contact-us.dto";
import { ContactUsService } from "../services/contact-us.service";

@Controller("ContactUs")
@ApiTags("ContactUs")
@UseGuards(JwtAuthGuard)
export class ContactUsController {
  constructor(@Inject(ContactUsService.name) private readonly contactUsService: ContactUsService) {}

  @Get()
  async findAll(@Query() filter: FilterContactUsDto, @Pager() page: IPagination) {
    const [data, total] = await this.contactUsService.findAll(filter, page);

    page.totalCount = total;
    return { data, pageInfo: page };
  }

  @Post()
  async create(@Body() createContactUsDto: CreateContactUsDto) {
    return this.contactUsService.create(createContactUsDto);
  }

  @Patch(";id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateContactUsDto: UpdateContactUsDto) {
    return this.contactUsService.update(updateContactUsDto, id);
  }

  @Get(":id")
  async getOneById(@Param("id", ParseIntPipe) id: number) {
    return this.contactUsService.getOneById(id);
  }

  @Delete(":id")
  async deleteOneById(@Param("id", ParseIntPipe) id: number) {
    return this.contactUsService.deleteOneById(id);
  }
}
