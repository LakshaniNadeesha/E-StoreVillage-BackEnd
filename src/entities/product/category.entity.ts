import { Column, Entity, OneToMany, OneToOne } from "typeorm";

import { BaseEntity } from "src/core/repository/base.entity";
import { Item } from "./item.entity";

@Entity()
export class Category extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  image: string;
  
  @Column({ default: 1, type: "int" })
  status: number;

  @OneToMany(() => Item, (Item: Item) => Item.Category)
  Item: Item;

  // @OneToMany(() => Category, (ParentCategory: Category) => ParentCategory.id)
  // ParentCategory: Category;
}
