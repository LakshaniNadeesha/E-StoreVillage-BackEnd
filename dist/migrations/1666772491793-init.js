"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1666772491793 = void 0;
class init1666772491793 {
    constructor() {
        this.name = 'init1666772491793';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_861b84f5c58e95ea78e17d2468c"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "brandsId"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" ADD "brandsId" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_861b84f5c58e95ea78e17d2468c" FOREIGN KEY ("brandsId") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.init1666772491793 = init1666772491793;
//# sourceMappingURL=1666772491793-init.js.map