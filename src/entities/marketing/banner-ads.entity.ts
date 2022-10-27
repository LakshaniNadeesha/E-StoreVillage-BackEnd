import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/core/repository/base.entity";

@Entity()
export class Banner extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  discription: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: false })
  type: number;

  @Column({ nullable: false })
  action: string;
}
