import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uauto_allocation_rule20250611152028 implements MigrationInterface {
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
                name: 'auto_allocation_rule',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'auto_allocation_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'auto_allocation_method',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'rule_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'time_in_minutes',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'date_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611152028-auto_allocation_rule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611152028-auto_allocation_rule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611152028-auto_allocation_rule.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('auto_allocation_rule', 'FK_auto_allocation_rule_warehouse_id');
        await queryRunner.dropForeignKey('auto_allocation_rule', 'FK_auto_allocation_rule_insert_user_id');
        await queryRunner.dropForeignKey('auto_allocation_rule', 'FK_auto_allocation_rule_last_update_user_id');
        await queryRunner.dropTable('auto_allocation_rule');
    }
}
