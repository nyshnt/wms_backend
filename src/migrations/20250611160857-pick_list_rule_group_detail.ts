import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_list_rule_group_detail20250611160857 implements MigrationInterface {
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
                name: 'pick_list_rule_group_detail',
                columns: [
                    {
                        name: 'pick_list_rule_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'pick_list_rule_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611160857-pick_list_rule_group_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_rule_group_detail', 'FK_pick_list_rule_group_detail_pick_list_rule_group_id');
        await queryRunner.dropForeignKey('pick_list_rule_group_detail', 'FK_pick_list_rule_group_detail_pick_list_rule_id');
        await queryRunner.dropTable('pick_list_rule_group_detail');
    }
}
