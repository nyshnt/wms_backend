import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_overview20250610105123 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        try {
            await queryRunner.createTable(
                new Table({
                    name: 'warehouse_overview',
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
                            name: 'IDX_warehouse_overview_warehouse_id',
                            columnNames: ['warehouse_id'],
                            isUnique: true,
                        },
                    ],
                }),
                true,
            );
        } catch (error) {
            console.error('Error creating table:', error);
            throw error;
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable('warehouse_overview');
        } catch (error) {
            console.error('Error dropping table:', error);
            throw error;
        }
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
