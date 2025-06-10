import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucustoms_consignment_default20250610113230 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'customs_consignment_default',
                columns: [
                    {
                        name: 'client_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'supplier_number',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'default_type',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'warehouse_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                ],
                indices: [
                    {
                        name: 'IDX_customs_consignment_default_client_id',
                        columnNames: ['client_id'],
                        isUnique: true,
                    },
                    {
                        name: 'IDX_customs_consignment_default_supplier_number',
                        columnNames: ['supplier_number'],
                        isUnique: true,
                    },
                    {
                        name: 'IDX_customs_consignment_default_default_type',
                        columnNames: ['default_type'],
                        isUnique: true,
                    },
                    {
                        name: 'IDX_customs_consignment_default_warehouse_id',
                        columnNames: ['warehouse_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customs_consignment_default');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
