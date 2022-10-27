import { Column, Entity } from "typeorm";

import { BaseEntity } from "src/core/repository/base.entity";

@Entity()
export class NotifySubscribe extends BaseEntity {
  @Column({ nullable: false })
  email: string;
}
