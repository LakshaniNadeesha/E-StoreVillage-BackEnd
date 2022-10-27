import {MigrationInterface, QueryRunner} from "typeorm";

export class complain1666804309931 implements MigrationInterface {
    name = 'complain1666804309931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "complainId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_69abd502acc4eb119b251987744" FOREIGN KEY ("complainId") REFERENCES "complain"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_69abd502acc4eb119b251987744"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "complainId"`);
    }

}
