import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "src/core/repository/base.entity";
import { ItemReview } from "./item-review.entity";
import { User } from "../user.entity";
import { Category } from "./category.entity";
import { Brands } from "./brands.entity";

@Entity()
export class Item extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: true })
  point: number;

  @Column({ nullable: false })
  price_sale: number;

  @Column({ nullable: false })
  price_discount: number;

  @Column({ nullable: false })
  discount_rate: number;

  @Column({ nullable: false })
  qty: number;

  @OneToMany(() => ItemReview, (ItemReview) => ItemReview.Item)
  ItemReview: ItemReview[];

  @ManyToOne(() => User, (User) => User.Item)
  CreatedBy: User;

  @ManyToOne(() => Category, (Category) => Category.Item)
  Category: Category;

  // @ManyToOne(() => Brands, (Brands) => Brands.Item)
  // Brands: Brands;

}
