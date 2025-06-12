import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ulookup_field_configuration20250612104128 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Lookup_Field_Configuration',
                columns: [
                    {
                        name: 'lookup_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'field_variable',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'input_flag',
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

        await queryRunner.createForeignKey('Lookup_Field_Configuration',
            new TableForeignKey({
                columnNames: ['lookup_id', 'customer_level'],
                referencedColumnNames: ['lookup_id', 'customer_level'],
                referencedTableName: 'lookup_configuration',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Lookup_Field_Configuration', 'FK_Lookup_Field_Configuration_lookup_id_customer_level');
        await queryRunner.dropTable('Lookup_Field_Configuration');
    }
}
