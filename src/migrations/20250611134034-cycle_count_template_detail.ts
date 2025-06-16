import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_template_detail20250611134034 implements MigrationInterface {
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
                name: 'cycle_count_template_detail',
                columns: [
                    {
                        name: 'cycle_count_template_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
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
      console.log('Note: Foreign keys were not created for 20250611134034-cycle_count_template_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_template_detail', 'FK_cycle_count_template_detail_cycle_count_template_id');
        await queryRunner.dropTable('cycle_count_template_detail');
    }
}
