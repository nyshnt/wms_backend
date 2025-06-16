import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Umenu_option20250611172556 implements MigrationInterface {
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
                name: 'Menu_Option',
                columns: [
                    {
                        name: 'option_name',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'option_type',
                        type: 'varchar'
                    },
                    {
                        name: 'permission_mask',
                        type: 'varchar'
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'executable_name',
                        type: 'varchar'
                    },
                    {
                        name: 'executable_parameter',
                        type: 'varchar'
                    },
                    {
                        name: 'button_image_id',
                        type: 'varchar'
                    },
                    {
                        name: 'auth_group_name',
                        type: 'varchar'
                    },
                    {
                        name: 'addon_id',
                        type: 'varchar'
                    },
                    {
                        name: 'group_name_option',
                        type: 'varchar'
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611172556-menu_option.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Menu_Option', 'FK_Menu_Option_application_id');
        await queryRunner.dropTable('Menu_Option');
    }
}
