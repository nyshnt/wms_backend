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

        // Check if warehouses table exists before creating foreign key
        const warehousesTableExists = await queryRunner.hasTable('warehouses');
        if (warehousesTableExists) {
            await queryRunner.createForeignKey(
                'archived_customs_consignment',
                new TableForeignKey({
                    columnNames: ['warehouse_id'],
                    referencedColumnNames: ['warehouse_id'],
                    referencedTableName: 'warehouses',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouses table does not exist yet.');
        }

        // Check if customs_consignment table exists before creating foreign key
        const customsConsignmentTableExists = await queryRunner.hasTable('customs_consignment');
        if (customsConsignmentTableExists) {
            await queryRunner.createForeignKey(
                'archived_customs_consignment',
                new TableForeignKey({
                    columnNames: ['customs_consignment_id'],
                    referencedColumnNames: ['customs_consignment_id'],
                    referencedTableName: 'customs_consignment',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for customs_consignment_id as the customs_consignment table does not exist yet.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the table first to check what foreign keys exist
        const table = await queryRunner.getTable('archived_customs_consignment');
        
        // Drop warehouse foreign key if it exists
        const warehouseForeignKey = table?.foreignKeys.find(fk => 
            fk.columnNames.indexOf('warehouse_id') !== -1
        );
        if (warehouseForeignKey) {
            await queryRunner.dropForeignKey('archived_customs_consignment', warehouseForeignKey);
        }

        // Drop customs consignment foreign key if it exists
        const customsConsignmentForeignKey = table?.foreignKeys.find(fk => 
            fk.columnNames.indexOf('customs_consignment_id') !== -1
        );
        if (customsConsignmentForeignKey) {
            await queryRunner.dropForeignKey('archived_customs_consignment', customsConsignmentForeignKey);
        }
        
        await queryRunner.dropTable('archived_customs_consignment');
    }
}
