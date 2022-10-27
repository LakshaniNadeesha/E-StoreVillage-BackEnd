"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complain1666804309931 = void 0;
class complain1666804309931 {
    constructor() {
        this.name = 'complain1666804309931';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "complainId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_69abd502acc4eb119b251987744" FOREIGN KEY ("complainId") REFERENCES "complain"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_69abd502acc4eb119b251987744"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "complainId"`);
    }
}
exports.complain1666804309931 = complain1666804309931;
//# sourceMappingURL=1666804309931-complain.js.map