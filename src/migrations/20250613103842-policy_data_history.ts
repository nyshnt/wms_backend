import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upolicy_data_history20250613103842 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'policy_data_history',
                columns: [
                    {
                        name: 'history_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'transaction_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'action_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'old_string_value1',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'new_string_value1',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'old_string_value2',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'new_string_value2',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'old_number_value1',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'new_number_value1',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'old_number_value2',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'new_number_value2',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'old_float_value1',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'new_float_value1',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'old_float_value2',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'new_float_value2',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'comment_text',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
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
                        name: 'warehouse_id', // Column for composite foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'sort_sequence', // Column for composite foreign key
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on UserAuthentication.user_id type
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to PolicyData
        await queryRunner.createForeignKey(
            'policy_data_history',
            new TableForeignKey({
                columnNames: ['policy_code', 'policy_variable', 'policy_value', 'warehouse_id', 'sort_sequence'],
                referencedColumnNames: ['policy_code', 'policy_variable', 'policy_value', 'warehouse_id_template', 'sort_sequence'], // Using warehouse_id_template as referenced column name
                referencedTableName: 'policy_data',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'policy_data_history',
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('policy_data_history', 'FK_policy_data_history_policy_data'); // Generic name for composite FK
        await queryRunner.dropForeignKey('policy_data_history', 'FK_policy_data_history_modification_user_id');
        await queryRunner.dropTable('policy_data_history');
    }
}