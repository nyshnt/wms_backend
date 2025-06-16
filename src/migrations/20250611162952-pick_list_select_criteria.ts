import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_list_select_criteria20250611162952 implements MigrationInterface {
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
                name: 'pick_list_select_criteria',
                columns: [
                    {
                        name: 'pick_list_select_criteria_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'pick_list_rule_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    },
                    {
                        name: 'logical_operator',
                        type: 'varchar'
                    },
                    {
                        name: 'table_name',
                        type: 'varchar'
                    },
                    {
                        name: 'field_name',
                        type: 'varchar'
                    },
                    {
                        name: 'operator',
                        type: 'varchar'
                    },
                    {
                        name: 'value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611162952-pick_list_select_criteria.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

        public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_select_criteria', 'FK_pick_list_select_criteria_pick_list_rule_id');
        await queryRunner.dropTable('pick_list_select_criteria');
    }
}
