import { Body, Controller, Inject, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "src/core/decorators";
import { ITokenUser } from "src/core/interface";
import { JwtAuthGuard } from "src/modules/auth/guards";
import { CreateUserPointDto } from "../dto/user-point.dto";
import { UserPointService } from "../services/user-point.service";

@Controller("points")
@ApiTags("Points")
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(@Inject(UserPointService.name) private readonly userPointsService: UserPointService) {}

  @Post()
  async create(@Body() createUserPointDto: CreateUserPointDto, @CurrentUser() user: ITokenUser) {
    return this.userPointsService.create(createUserPointDto, parseInt(user.id), 7);
  }
}
