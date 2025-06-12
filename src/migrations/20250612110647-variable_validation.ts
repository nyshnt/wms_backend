import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvariable_validation20250612110647 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Variable_Validation',
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
                        name: 'validation_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'validation_mode',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'return_field_figure',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'return_field',
                        type: 'varchar',
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

        await queryRunner.createForeignKey('Variable_Validation',
            new TableForeignKey({
                columnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedColumnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedTableName: 'variable_configuration',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_Validation', 'FK_Variable_Validation_variable_name_application_id_form_id_addon_id_customer_level');
        await queryRunner.dropTable('Variable_Validation');
    }
}
