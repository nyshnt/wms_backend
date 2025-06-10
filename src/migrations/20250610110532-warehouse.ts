import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse20250610110532 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'warehouses',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                ],
                indices: [
                    {
                        name: 'IDX_warehouses_warehouse_id',
                        columnNames: ['warehouse_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('warehouses');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
