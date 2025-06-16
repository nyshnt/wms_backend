import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upolicy_information20250613103516 implements MigrationInterface {
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
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613103516-policy_information.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('policy_information', 'FK_policy_information_policy_data'); // Generic name for composite FK
        await queryRunner.dropTable('policy_information');
    }
}