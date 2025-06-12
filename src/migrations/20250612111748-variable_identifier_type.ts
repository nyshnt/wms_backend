import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvariable_identifier_type20250612111748 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Variable_Identifier_Type',
                columns: [
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'identifier_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'field_identifier',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'system_id_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'reference_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'work_key_flag',
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

        await queryRunner.createForeignKey('Variable_Identifier_Type',
            new TableForeignKey({
                columnNames: ['variable_name'],
                referencedColumnNames: ['variable_name'],
                referencedTableName: 'variable_configuration',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Variable_Identifier_Type', 'FK_Variable_Identifier_Type_variable_name');
        await queryRunner.dropTable('Variable_Identifier_Type');
    }
}
