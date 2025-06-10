import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucarrier_move20250610113402 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'carrier_move',
                columns: [
                    {
                        name: 'carrier_move_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                ],
                indices: [
                    {
                        name: 'IDX_carrier_move_id',
                        columnNames: ['carrier_move_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('carrier_move');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
