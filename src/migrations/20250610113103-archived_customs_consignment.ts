import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uarchived_customs_consignment20250610113103 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKey(
            'archived_customs_consignment',
            new TableForeignKey({
                columnNames: ['customs_consignment_id'],
                referencedColumnNames: ['customs_consignment_id'],
                referencedTableName: 'customs_consignment',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'archived_customs_consignment',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouses',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('archived_customs_consignment', 'FK_archived_customs_consignment_customs_consignment_id');
        await queryRunner.dropForeignKey('archived_customs_consignment', 'FK_archived_customs_consignment_warehouse_id');
        await queryRunner.dropTable('archived_customs_consignment');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
