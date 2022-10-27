import { Controller, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/guards";

@Controller("order")
@ApiTags("Order")
@UseGuards(JwtAuthGuard)
export class OrderController {
  // constructor(@Inject(OrderService.name) private readonly OrderService: OrderService) {}
}
