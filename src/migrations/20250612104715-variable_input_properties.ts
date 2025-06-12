import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvariable_input_properties20250612104715 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Variable_Input_Properties',
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
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'min_length',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'max_length',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'input_mask',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'display_mask_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'auto_mask_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'multi_line_flag',
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

        await queryRunner.createForeignKeys('Variable_Input_Properties', [
            new TableForeignKey({
                columnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedColumnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedTableName: 'variable_configuration',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['locale_id'],
                referencedColumnNames: ['locale_id'],
                referencedTableName: 'locale_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_Input_Properties', 'FK_Variable_Input_Properties_variable_name_application_id_form_id_addon_id_customer_level');
        await queryRunner.dropForeignKey('Variable_Input_Properties', 'FK_Variable_Input_Properties_locale_id');
        await queryRunner.dropTable('Variable_Input_Properties');
    }
}
