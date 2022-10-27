"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniot1665925318056 = void 0;
class iniot1665925318056 {
    constructor() {
        this.name = 'iniot1665925318056';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "password_reset_token" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "token" character varying NOT NULL, "expiration" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_d8950eed0b32265b7841f1b746f" UNIQUE ("email"), CONSTRAINT "PK_838af121380dfe3a6330e04f5bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_bill" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "FirstName" character varying NOT NULL, "LastName" character varying NOT NULL, "Country" character varying NOT NULL, "PostCode" character varying NOT NULL, "AddressLine1" character varying NOT NULL, "AddressLine2" character varying NOT NULL, "City" character varying NOT NULL, "Email" character varying NOT NULL, "EnableCatelogue" boolean NOT NULL, "EnableOrderDiscount" boolean NOT NULL, "Pickup" boolean NOT NULL, CONSTRAINT "PK_b4a8185ff14a367da4a3cd047b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item_review" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "review" character varying NOT NULL, "rate" integer NOT NULL, "itemId" integer, "itemReviewById" integer, CONSTRAINT "PK_98a1fd6f7a42522280392ae51a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "brands" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_items" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "OrderQty" integer NOT NULL, "Price" integer NOT NULL, "itemId" integer, "orderId" integer, CONSTRAINT "PK_005269d8574e6fac0493715c308" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "point" integer, "price_sale" integer NOT NULL, "price_discount" integer NOT NULL, "discount_rate" integer NOT NULL, "qty" integer NOT NULL, "createdById" integer, "categoryId" integer, "brandsId" integer, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "first_name" character varying, "last_name" character varying, "email" character varying, "password" character varying, "status" integer NOT NULL DEFAULT '1', "numFriends" character varying, "socialLink" character varying, "bio" character varying, "role" character varying NOT NULL, "phoneNumber" character varying, "isPhoneNumberConfirmed" boolean NOT NULL DEFAULT false, "failed_login_attempt" integer NOT NULL DEFAULT '0', "itemReviewId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "subtotal" integer, "paid" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_point" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "point_type" character varying, "point" character varying, "pointOwnerId" integer, "orderId" integer, CONSTRAINT "PK_8cbdfb12d62030c7eac59d19dd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "complain" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "complain" character varying NOT NULL, CONSTRAINT "PK_b87ec00ebb399061bfc3cd614db" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "banner" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "discription" character varying NOT NULL, "image" character varying NOT NULL, "type" integer NOT NULL, "action" character varying NOT NULL, CONSTRAINT "PK_6d9e2570b3d85ba37b681cd4256" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notify_subscribe" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "email" character varying NOT NULL, CONSTRAINT "PK_e6379d80d5b7f10bb751d4ecf51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "discription" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_us" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "email" character varying NOT NULL, "subject" character varying NOT NULL, "message" character varying NOT NULL, CONSTRAINT "PK_b61766a4d93470109266b976cfe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item_review" ADD CONSTRAINT "FK_1c2243499ad6a68788b85141310" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item_review" ADD CONSTRAINT "FK_e8528a95bdcbcb9b15b09fe4d93" FOREIGN KEY ("itemReviewById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_e253fbd572683bcc785a70cbca7" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_f1d359a55923bb45b057fbdab0d" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_23842f1bc57d2d527bbf6d14d8d" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_c0c8f47a702c974a77812169bc2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_861b84f5c58e95ea78e17d2468c" FOREIGN KEY ("brandsId") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_96108f05681a620960e040bebac" FOREIGN KEY ("itemReviewId") REFERENCES "item_review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_point" ADD CONSTRAINT "FK_5cc0ab0c96a3a84dba62273c716" FOREIGN KEY ("pointOwnerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_point" ADD CONSTRAINT "FK_24a410040ec1a53c2d2ac27394a" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_point" DROP CONSTRAINT "FK_24a410040ec1a53c2d2ac27394a"`);
        await queryRunner.query(`ALTER TABLE "user_point" DROP CONSTRAINT "FK_5cc0ab0c96a3a84dba62273c716"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_96108f05681a620960e040bebac"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_861b84f5c58e95ea78e17d2468c"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_c0c8f47a702c974a77812169bc2"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_23842f1bc57d2d527bbf6d14d8d"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_f1d359a55923bb45b057fbdab0d"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_e253fbd572683bcc785a70cbca7"`);
        await queryRunner.query(`ALTER TABLE "item_review" DROP CONSTRAINT "FK_e8528a95bdcbcb9b15b09fe4d93"`);
        await queryRunner.query(`ALTER TABLE "item_review" DROP CONSTRAINT "FK_1c2243499ad6a68788b85141310"`);
        await queryRunner.query(`DROP TABLE "contact_us"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "notify_subscribe"`);
        await queryRunner.query(`DROP TABLE "banner"`);
        await queryRunner.query(`DROP TABLE "complain"`);
        await queryRunner.query(`DROP TABLE "user_point"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "order_items"`);
        await queryRunner.query(`DROP TABLE "brands"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "item_review"`);
        await queryRunner.query(`DROP TABLE "order_bill"`);
        await queryRunner.query(`DROP TABLE "password_reset_token"`);
    }
}
exports.iniot1665925318056 = iniot1665925318056;
//# sourceMappingURL=1665925318056-iniot.js.map