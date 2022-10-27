import {MigrationInterface, QueryRunner} from "typeorm";

export class category1666797026919 implements MigrationInterface {
    name = 'category1666797026919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "status" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "status"`);
    }

}
