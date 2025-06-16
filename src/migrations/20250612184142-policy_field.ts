import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upolicy_field20250612184142 implements MigrationInterface {
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
                name: 'policy_field',
                columns: [
                    {
                        name: 'policy_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'policy_field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'field_alias',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'field_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'tooltip_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612184142-policy_field.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612184142-policy_field.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('policy_field', 'FK_policy_field_policy_id');
        await queryRunner.dropForeignKey('policy_field', 'FK_policy_field_tooltip_mls_id');
        await queryRunner.dropTable('policy_field');
    }
}