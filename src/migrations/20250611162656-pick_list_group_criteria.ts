import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_list_group_criteria20250611162656 implements MigrationInterface {
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
                name: 'pick_list_group_criteria',
                columns: [
                    {
                        name: 'pick_list_group_criteria_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
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
                        name: 'pick_list_rule_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611162656-pick_list_group_criteria.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_group_criteria', 'FK_pick_list_group_criteria_pick_list_rule_id');
        await queryRunner.dropTable('pick_list_group_criteria');
    }
}
