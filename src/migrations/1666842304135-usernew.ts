import {MigrationInterface, QueryRunner} from "typeorm";

export class usernew1666842304135 implements MigrationInterface {
    name = 'usernew1666842304135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_point" DROP CONSTRAINT "FK_24a410040ec1a53c2d2ac27394a"`);
        await queryRunner.query(`ALTER TABLE "user_point" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "Items" character varying`);
        await queryRunner.query(`ALTER TABLE "order" ADD "user" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "Items"`);
        await queryRunner.query(`ALTER TABLE "user_point" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "user_point" ADD CONSTRAINT "FK_24a410040ec1a53c2d2ac27394a" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
