import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uinventory_detail_asset_list_picking20250613115102 implements MigrationInterface {
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
                name: 'inventory_detail_asset_list_picking',
                columns: [
                    {
                        name: 'inventory_detail_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'inventory_status_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'unit_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'unit_cases',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'unit_packs',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'sub_detail_number', // Column for foreign key
                        type: 'varchar', // Assuming varchar for sub_detail_number
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'work_reference_detail_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for work_reference_detail_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613115102-inventory_detail_asset_list_picking.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613115102-inventory_detail_asset_list_picking.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('inventory_detail_asset_list_picking', 'FK_inventory_detail_asset_list_picking_sub_detail_number');
        await queryRunner.dropForeignKey('inventory_detail_asset_list_picking', 'FK_inventory_detail_asset_list_picking_work_reference_detail_id');
        await queryRunner.dropTable('inventory_detail_asset_list_picking');
    }
}