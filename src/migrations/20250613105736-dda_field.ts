import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udda_field20250613105736 implements MigrationInterface {
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
                name: 'dda_field',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_field_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'link_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'radio_figure',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'default_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'display_only_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'context_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'primary_key_field_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'primary_key_layout_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'aggregate_function',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'link_dda_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'filter_group_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to DDAMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613105736-dda_field.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613105736-dda_field.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613105736-dda_field.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_field', 'FK_dda_field_dda_master_composite'); // Generic name for composite FK
        await queryRunner.dropForeignKey('dda_field', 'FK_dda_field_link_dda_id');
        await queryRunner.dropForeignKey('dda_field', 'FK_dda_field_filter_group_id');
        await queryRunner.dropTable('dda_field');
    }
}