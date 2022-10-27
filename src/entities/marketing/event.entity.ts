import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/core/repository/base.entity";

@Entity()
export class Event extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column("varchar")
  discription: string;

  @Column({ nullable: false })
  date: Date;

}
