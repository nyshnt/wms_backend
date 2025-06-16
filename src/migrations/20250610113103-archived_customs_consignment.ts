import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarchived_customs_consignment20250610113103 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableExists = await queryRunner.hasTable('archived_customs_consignment');
        if (tableExists) {
            console.log('Table archived_customs_consignment already exists, skipping creation');
            return;
        }

        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'archived_customs_consignment',
                columns: [
                    {
                        name: 'customs_consignment_id',
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
                        name: 'IDX_archived_customs_consignment_id',
                        columnNames: ['customs_consignment_id'],
                        isUnique: true,
                    },
                    {
                        name: 'IDX_archived_customs_consignment_warehouse_id',
                        columnNames: ['warehouse_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );

        console.log('Created archived_customs_consignment table');
        console.log('Note: Foreign keys were not created. You should create these foreign keys when making APIs.');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('archived_customs_consignment');
    }
}
