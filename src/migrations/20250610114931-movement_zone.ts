import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Umovement_zone20250610114931 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'movement_zone',
                columns: [
                    {
                        name: 'movement_zone_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movement_zone');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
