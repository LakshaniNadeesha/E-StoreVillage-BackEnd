import { Column, Entity } from "typeorm";

import { BaseEntity } from "src/core/repository/base.entity";

@Entity()
export class ContactUs extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: false })
  message: string;
}
