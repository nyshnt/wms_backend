import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_list20250611161234 implements MigrationInterface {
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
                name: 'pick_list',
                columns: [
                    {
                        name: 'pick_list_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'pick_list_type',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_list_status',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_list_rule_id',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_list_rule_group_id',
                        type: 'varchar'
                    },
                    {
                        name: 'max_pick_list_weight',
                        type: 'int'
                    },
                    {
                        name: 'max_pick_list_cube',
                        type: 'int'
                    },
                    {
                        name: 'pick_list_cube_weight_threshold',
                        type: 'int'
                    },
                    {
                        name: 'pick_list_max_add_case_weight',
                        type: 'int'
                    },
                    {
                        name: 'total_volume',
                        type: 'int'
                    },
                    {
                        name: 'total_weight',
                        type: 'int'
                    },
                    {
                        name: 'total_items',
                        type: 'int'
                    },
                    {
                        name: 'total_customers',
                        type: 'int'
                    },
                    {
                        name: 'total_clients',
                        type: 'int'
                    },
                    {
                        name: 'total_lists_in_batch',
                        type: 'int'
                    },
                    {
                        name: 'total_load_picks',
                        type: 'int'
                    },
                    {
                        name: 'total_slots',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611161234-pick_list.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list', 'FK_pick_list_pick_list_rule_id');
        await queryRunner.dropForeignKey('pick_list', 'FK_pick_list_pick_list_rule_group_id');
        await queryRunner.dropTable('pick_list');
    }
}
