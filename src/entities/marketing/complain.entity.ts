import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/core/repository/base.entity";
import { User } from "../user.entity";

@Entity()
export class Complain extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column("varchar")
  complain: string;

  @OneToMany(() => User, (user: User) => user.complain)
  userComplain: User;
}
