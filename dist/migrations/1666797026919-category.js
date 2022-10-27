"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category1666797026919 = void 0;
class category1666797026919 {
    constructor() {
        this.name = 'category1666797026919';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "category" ADD "status" integer NOT NULL DEFAULT '1'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "status"`);
    }
}
exports.category1666797026919 = category1666797026919;
//# sourceMappingURL=1666797026919-category.js.map