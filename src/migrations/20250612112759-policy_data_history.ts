import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upolicy_data_history20250612112759 implements MigrationInterface {
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
                name: 'Policy_Data_History',
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
                        name: 'modification_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612112759-policy_data_history.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Policy_Data_History', 'FK_Policy_Data_History_policy_code_policy_variable_policy_value_warehouse_id_sort_sequence');
        await queryRunner.dropForeignKey('Policy_Data_History', 'FK_Policy_Data_History_modification_user_id');
        await queryRunner.dropTable('Policy_Data_History');
    }
}
