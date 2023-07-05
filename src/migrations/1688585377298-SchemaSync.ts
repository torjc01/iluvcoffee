import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1688585377298 implements MigrationInterface {
    name = 'SchemaSync1688585377298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "descrition" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "descrition"`);
    }

}
