"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user1665925342543 = void 0;
class user1665925342543 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO "user" ("first_name", "last_name", "email", "password", "status", "role", "failed_login_attempt")
            VALUES ('Super', 'Admin', 'super@yopmail.com', '$2b$10$yusLXYVO62OnFpPCDqU6/eXuU5e9yZRclMQys3hqDtSmL822tFJ7G', 1, 'SuperAdmin', 0)
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM "user" WHERE true`);
    }
}
exports.user1665925342543 = user1665925342543;
//# sourceMappingURL=1665925342543-user.js.map