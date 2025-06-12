import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uprofile_definition_fields20250612155025 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'profile_definition_fields',
                columns: [
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
                        name: 'profile_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'field_radio_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
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

        // Composite foreign key to ProfileDefinition
        await queryRunner.createForeignKey(
            'profile_definition_fields',
            new TableForeignKey({
                columnNames: ['application_id', 'form_id', 'profile_name'],
                referencedColumnNames: ['application_id', 'form_id', 'profile_name'], // Assuming these form the composite primary key of profile_definition
                referencedTableName: 'profile_definition',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('profile_definition_fields', 'FK_profile_definition_fields_profile_definition'); // Generic name for composite FK
        await queryRunner.dropTable('profile_definition_fields');
    }
}