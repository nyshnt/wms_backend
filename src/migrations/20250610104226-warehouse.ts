import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWarehouseTable20250610104226 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
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
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('warehouses');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
