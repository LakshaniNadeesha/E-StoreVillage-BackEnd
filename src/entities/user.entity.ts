import { Complain } from 'src/entities';
import { BaseEntity } from "./../core/repository/base.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Exclude } from "class-transformer";
import { Item } from "./product/item.entity";
import { Order } from "./order/order.entity";
import { ItemReview } from "./product/item-review.entity";
import { UserPoint } from "./user-point.entity";

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: 1, type: "int" })
  status: number;

  @Column({ nullable: true })
  numFriends: string;
  
  @Column({ nullable: true })
  socialLink: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: false })
  role: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  address: string;

  @Column({ default: false })
  isPhoneNumberConfirmed: boolean;

  @Column({ default: 0 })
  @Exclude()
  failed_login_attempt: number;

  @OneToOne(() => Item, (Item: Item) => Item.CreatedBy)
  Item: Item;

  @ManyToOne(() => ItemReview, (ItemReview: ItemReview) => ItemReview.ItemReviewBy)
  ItemReview: ItemReview[];

  @OneToOne(() => User, (User: User) => User.id)
  ParentUser: User;

  @OneToMany(() => UserPoint, (userPoint) => userPoint.pointOwner)
  userPoint: UserPoint[];

  @ManyToOne(() => Complain, (complain: Complain) => complain.userComplain)
  complain: Complain[];

  
}
