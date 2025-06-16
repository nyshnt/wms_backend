import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_work_header_asset_list_picking20250613113952 implements MigrationInterface {
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
                name: 'pick_work_header_asset_list_picking',
                columns: [
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'source_location',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'source_area_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'picked_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'approved_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'pick_status',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'load_division_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'pick_list_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for pick_list_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'asset_slot_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_slot_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613113952-pick_work_header_asset_list_picking.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613113952-pick_work_header_asset_list_picking.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_work_header_asset_list_picking', 'FK_pick_work_header_asset_list_picking_pick_list_id');
        await queryRunner.dropForeignKey('pick_work_header_asset_list_picking', 'FK_pick_work_header_asset_list_picking_asset_slot_id');
        await queryRunner.dropTable('pick_work_header_asset_list_picking');
    }
}