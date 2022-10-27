import { Column, Entity, OneToMany, OneToOne } from "typeorm";

import { BaseEntity } from "src/core/repository/base.entity";
import { User } from "../user.entity";
import { UserPoint } from "../user-point.entity";

@Entity()
export class Order extends BaseEntity {

  @Column({ nullable: true })
  Items: string;

  @Column({ nullable: true })
  subtotal: number;

  @Column({ nullable: true })
  paid: number;

  @Column({ nullable: true })
  user: number;

}
