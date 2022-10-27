import {MigrationInterface, QueryRunner} from "typeorm";

export class init1666772491793 implements MigrationInterface {
    name = 'init1666772491793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_861b84f5c58e95ea78e17d2468c"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "brandsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "brandsId" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_861b84f5c58e95ea78e17d2468c" FOREIGN KEY ("brandsId") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
