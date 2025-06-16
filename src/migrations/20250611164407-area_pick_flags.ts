import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarea_pick_flags20250611164407 implements MigrationInterface {
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
                name: 'area_pick_flags',
                columns: [
                    {
                        name: 'source_area_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_division_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lot_tracking_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'super_lot_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'revision_level_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'origin_code_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'supplier_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'date_in_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'sub_inventory_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'load_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'part_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'location_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'quantity_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'catch_weight_qty_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'manufacture_date_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'expiration_date_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'return_reason_id_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'version_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611164407-area_pick_flags.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('area_pick_flags', 'FK_area_pick_flags_source_area_code');
        await queryRunner.dropForeignKey('area_pick_flags', 'FK_area_pick_flags_warehouse_id');
        await queryRunner.dropTable('area_pick_flags');
    }
}
