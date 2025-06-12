import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvariable_definition20250612111041 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Variable_Definition',
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
                        name: 'constant_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'char_value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'integer_value',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'float_value',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'date_value',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'default_command',
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

        await queryRunner.createForeignKey('Variable_Definition',
            new TableForeignKey({
                columnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedColumnNames: ['variable_name', 'application_id', 'form_id', 'addon_id', 'customer_level'],
                referencedTableName: 'variable_configuration',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_Definition', 'FK_Variable_Definition_variable_name_application_id_form_id_addon_id_customer_level');
        await queryRunner.dropTable('Variable_Definition');
    }
}
