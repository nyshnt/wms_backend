import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucarton_master_asset_list_picking20250611163526 implements MigrationInterface {
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
                name: 'carton_master_asset_list_picking',
                columns: [
                    {
                        name: 'carton_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'carton_length',
                        type: 'int'
                    },
                    {
                        name: 'carton_width',
                        type: 'int'
                    },
                    {
                        name: 'carton_height',
                        type: 'int'
                    },
                    {
                        name: 'carton_weight',
                        type: 'int'
                    },
                    {
                        name: 'carton_volume',
                        type: 'int'
                    },
                    {
                        name: 'carton_footprint_code',
                        type: 'varchar'
                    },
                    {
                        name: 'last_carton_footprint_code',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_order_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'pre_print_label_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'ship_overflow_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611163526-carton_master_asset_list_picking.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('carton_master_asset_list_picking', 'FK_carton_master_asset_list_picking_warehouse_id');
        await queryRunner.dropTable('carton_master_asset_list_picking');
    }
}
