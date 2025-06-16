import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uworkflow_application20250611172802 implements MigrationInterface {
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
                name: 'Workflow_Application',
                columns: [
                    {
                        name: 'application_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar'
                    },
                    {
                        name: 'description_id',
                        type: 'varchar'
                    },
                    {
                        name: 'product_id',
                        type: 'varchar'
                    },
                    {
                        name: 'group_name',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611172802-workflow_application.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Workflow_Application', 'FK_Workflow_Application_start_form_id');
        await queryRunner.dropTable('Workflow_Application');
    }
}
