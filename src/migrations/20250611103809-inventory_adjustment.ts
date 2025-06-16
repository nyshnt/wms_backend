import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uinventory_adjustment20250611103809 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
        await queryRunner.createTable(
            new Table({
                name: 'inventory_adjustment',
                columns: [
                    {
                        name: 'inventory_adjustment_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar'
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar'
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar'
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar'
                    },
                    {
                        name: 'consignment_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );
    }
    catch (error) {
        console.error('Error creating inventory_adjustment table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('inventory_adjustment');
    }
}
