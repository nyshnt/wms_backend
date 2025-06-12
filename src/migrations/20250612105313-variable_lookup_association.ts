import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvariable_lookup_association20250612105313 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Variable_Lookup_Association',
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
                        name: 'lookup_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'return_field',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'input_field',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'multi_select_flag',
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

        await queryRunner.createForeignKeys('Variable_Lookup_Association', [
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
        await queryRunner.dropForeignKey('Variable_Lookup_Association', 'FK_Variable_Lookup_Association_variable_name_application_id_form_id_addon_id_customer_level');
        await queryRunner.dropForeignKey('Variable_Lookup_Association', 'FK_Variable_Lookup_Association_lookup_id');
        await queryRunner.dropTable('Variable_Lookup_Association');
    }
}
