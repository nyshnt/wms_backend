import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upolicy_information20250613103516 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'policy_information',
                columns: [
                    {
                        name: 'policy_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'allow_multiple_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'allow_delete_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'allow_override_figure',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'policy_code', // Column for composite foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'policy_variable', // Column for composite foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'policy_value', // Column for composite foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'sort_sequence', // Column for composite foreign key
                        type: 'int',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to PolicyData
        await queryRunner.createForeignKey(
            'policy_information',
            new TableForeignKey({
                columnNames: ['policy_code', 'policy_variable', 'policy_value', 'sort_sequence'],
                referencedColumnNames: ['policy_code', 'policy_variable', 'policy_value', 'sort_sequence'], // Assuming these form the composite primary key of policy_data
                referencedTableName: 'policy_data',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('policy_information', 'FK_policy_information_policy_data'); // Generic name for composite FK
        await queryRunner.dropTable('policy_information');
    }
}