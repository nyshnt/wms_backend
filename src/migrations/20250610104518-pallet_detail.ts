import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upallet_detail20250610104518 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'pallet_detail',
                columns: [
                    {
                        name: 'pallet_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                ],
                indices: [
                    {
                        name: 'IDX_pallet_detail_pallet_id',
                        columnNames: ['pallet_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pallet_detail');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
