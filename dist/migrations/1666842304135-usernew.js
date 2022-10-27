"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usernew1666842304135 = void 0;
class usernew1666842304135 {
    constructor() {
        this.name = 'usernew1666842304135';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_point" DROP CONSTRAINT "FK_24a410040ec1a53c2d2ac27394a"`);
        await queryRunner.query(`ALTER TABLE "user_point" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "Items" character varying`);
        await queryRunner.query(`ALTER TABLE "order" ADD "user" integer`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "Items"`);
        await queryRunner.query(`ALTER TABLE "user_point" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "user_point" ADD CONSTRAINT "FK_24a410040ec1a53c2d2ac27394a" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.usernew1666842304135 = usernew1666842304135;
//# sourceMappingURL=1666842304135-usernew.js.map