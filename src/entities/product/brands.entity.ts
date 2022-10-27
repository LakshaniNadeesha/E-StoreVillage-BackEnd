import { Column, Entity, OneToMany } from "typeorm";

import { BaseEntity } from "src/core/repository/base.entity";
import { Item } from "./item.entity";

@Entity()
export class Brands extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  image: string;

  // @OneToMany(() => Item, (Item: Item) => Item.Brands)
  // Item: Item;
}
