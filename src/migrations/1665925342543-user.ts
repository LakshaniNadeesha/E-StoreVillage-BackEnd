import { MigrationInterface, QueryRunner } from "typeorm";

export class user1665925342543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "user" ("first_name", "last_name", "email", "password", "status", "role", "failed_login_attempt")
            VALUES ('Super', 'Admin', 'super@yopmail.com', '$2b$10$yusLXYVO62OnFpPCDqU6/eXuU5e9yZRclMQys3hqDtSmL822tFJ7G', 1, 'SuperAdmin', 0)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "user" WHERE true`);
    }

}
