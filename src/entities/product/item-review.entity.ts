import { Column, Entity, ManyToOne } from "typeorm";

import { BaseEntity } from "src/core/repository/base.entity";
import { Item } from "./item.entity";
import { User } from "../user.entity";

@Entity()
export class ItemReview extends BaseEntity {
  @Column({ nullable: false })
  review: string;

  @Column({ nullable: false })
  rate: number;

  @ManyToOne(() => Item, (Item) => Item.ItemReview)
  Item: Item;

  @ManyToOne(() => User, (User: User) => User.ItemReview)
  ItemReviewBy: User;
}
