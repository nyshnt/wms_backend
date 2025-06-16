import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uworkflow_form20250612103935 implements MigrationInterface {
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
                name: 'Workflow_Form',
                columns: [
                    {
                        name: 'form_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'form_name',
                        type: 'varchar'
                    },
                    {
                        name: 'form_description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'form_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'form_version',
                        type: 'int',
                        isNullable: true
                    }
                ]
            }),
            true
        );
    } catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Workflow_Form');
    }
}
