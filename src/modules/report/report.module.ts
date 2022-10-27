import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Order } from "src/entities";
@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [],
  exports: [],
  controllers: [],
})
export class OrderModule {}
