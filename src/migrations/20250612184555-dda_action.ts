import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udda_action20250612184555 implements MigrationInterface {
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
                name: 'dda_action',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'action_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'action_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'action_form',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'image_link',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'action_initial_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'action_post_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'radio_figure',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'auto_clear_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'submit_button_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'post_action_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to DDAMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612184555-dda_action.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612184555-dda_action.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612184555-dda_action.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_action', 'FK_dda_action_dda_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('dda_action', 'FK_dda_action_submit_button_mls_id');
        await queryRunner.dropForeignKey('dda_action', 'FK_dda_action_post_action_mls_id');
        await queryRunner.dropTable('dda_action');
    }
}