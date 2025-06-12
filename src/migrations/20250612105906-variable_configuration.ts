import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvariable_configuration20250612105906 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Variable_Configuration',
                columns: [
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'application_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'form_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'addon_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'visible_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'field_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'control_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'context_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'display_width',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'display_height',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'control_properties',
                        type: 'json',
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

        await queryRunner.createForeignKeys('Variable_Configuration', [
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_Configuration', 'FK_Variable_Configuration_application_id');
        await queryRunner.dropForeignKey('Variable_Configuration', 'FK_Variable_Configuration_form_id');
        await queryRunner.dropTable('Variable_Configuration');
    }
}
