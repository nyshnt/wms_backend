import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uworkflow_application20250611172802 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKey('Workflow_Application',
            new TableForeignKey({
                columnNames: ['start_form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Workflow_Application', 'FK_Workflow_Application_start_form_id');
        await queryRunner.dropTable('Workflow_Application');
    }
}
