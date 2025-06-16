import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uallocation_search_header_list_picking20250611161446 implements MigrationInterface {
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
                name: 'allocation_search_header_list_picking',
                columns: [
                    {
                        name: 'allocation_search_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'area_code',
                        type: 'varchar'
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'building_id',
                        type: 'varchar'
                    },
                    {
                        name: 'search_path_type',
                        type: 'varchar'
                    },
                    {
                        name: 'threshold_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'list_pick_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'load_division_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611161446-allocation_search_header_list_picking.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('allocation_search_header_list_picking', 'FK_allocation_search_header_list_picking_area_code');
        await queryRunner.dropForeignKey('allocation_search_header_list_picking', 'FK_allocation_search_header_list_picking_warehouse_id');
        await queryRunner.dropForeignKey('allocation_search_header_list_picking', 'FK_allocation_search_header_list_picking_building_id');
        await queryRunner.dropTable('allocation_search_header_list_picking');
    }
}
