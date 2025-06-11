import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uworkflow_flow20250611173227 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKeys('Workflow_Flow', [
            new TableForeignKey({
                columnNames: ['application_id', 'customer_level'],
                referencedColumnNames: ['application_id', 'customer_level'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['next_form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['previous_form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['home_form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['form_id_command'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        ]);
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
