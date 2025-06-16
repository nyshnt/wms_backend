import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upolicy_data_history20250613103842 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
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
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613103842-policy_data_history.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613103842-policy_data_history.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('policy_data_history', 'FK_policy_data_history_policy_data'); // Generic name for composite FK
        await queryRunner.dropForeignKey('policy_data_history', 'FK_policy_data_history_modification_user_id');
        await queryRunner.dropTable('policy_data_history');
    }
}