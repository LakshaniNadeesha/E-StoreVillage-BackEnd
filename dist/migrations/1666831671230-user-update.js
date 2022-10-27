"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdate1666831671230 = void 0;
class userUpdate1666831671230 {
    constructor() {
        this.name = 'userUpdate1666831671230';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }
}
exports.userUpdate1666831671230 = userUpdate1666831671230;
//# sourceMappingURL=1666831671230-user-update.js.map