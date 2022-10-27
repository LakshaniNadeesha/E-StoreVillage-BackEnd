import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./../core/repository/base.entity";
import { Order } from "./order/order.entity";
import { User } from "./user.entity";
@Entity()
export class UserPoint extends BaseEntity {
  @Column({ nullable: true })
  point_type: string;

  @Column({ nullable: true })
  point: string;

  @ManyToOne(() => User, (user: User) => user.userPoint)
  pointOwner: User;

}
