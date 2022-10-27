import {MigrationInterface, QueryRunner} from "typeorm";

export class userUpdate1666831671230 implements MigrationInterface {
    name = 'userUpdate1666831671230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
