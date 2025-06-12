import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvariable_view_properties20250612104318 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Variable_View_Properties',
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
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'code_column',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'description_column',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'add_null_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'display_single_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'edit_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'sort_column',
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

        await queryRunner.createForeignKeys('Variable_View_Properties', [
            new TableForeignKey({
                columnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedColumnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedTableName: 'variable_configuration',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['lookup_id'],
                referencedColumnNames: ['lookup_id'],
                referencedTableName: 'lookup_configuration',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_View_Properties', 'FK_Variable_View_Properties_variable_name_application_id_form_id_addon_id_customer_level');
        await queryRunner.dropForeignKey('Variable_View_Properties', 'FK_Variable_View_Properties_lookup_id');
        await queryRunner.dropTable('Variable_View_Properties');
    }
}
