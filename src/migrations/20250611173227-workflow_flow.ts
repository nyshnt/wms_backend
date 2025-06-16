import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uworkflow_flow20250611173227 implements MigrationInterface {
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
                name: 'Workflow_Flow',
                columns: [
                    {
                        name: 'application_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'form_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'static_form_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611173227-workflow_flow.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Workflow_Flow', 'FK_Workflow_Flow_application_id_customer_level');
        await queryRunner.dropForeignKey('Workflow_Flow', 'FK_Workflow_Flow_form_id');
        await queryRunner.dropForeignKey('Workflow_Flow', 'FK_Workflow_Flow_next_form_id');
        await queryRunner.dropForeignKey('Workflow_Flow', 'FK_Workflow_Flow_previous_form_id');
        await queryRunner.dropForeignKey('Workflow_Flow', 'FK_Workflow_Flow_home_form_id');
        await queryRunner.dropForeignKey('Workflow_Flow', 'FK_Workflow_Flow_form_id_command');
        await queryRunner.dropTable('Workflow_Flow');
    }
}
