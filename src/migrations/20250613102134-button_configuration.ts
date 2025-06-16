import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ubutton_configuration20250613102134 implements MigrationInterface {
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
                name: 'button_configuration',
                columns: [
                    {
                        name: 'button_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'button_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'button_style',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'position',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'function_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'parameters',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'event_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'permissions',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'image_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'disabled_image_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'hot_image_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'cause_validation_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'caption_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'tooltip_text_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613102134-button_configuration.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613102134-button_configuration.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('button_configuration', 'FK_button_configuration_caption_mls_id');
        await queryRunner.dropForeignKey('button_configuration', 'FK_button_configuration_tooltip_text_mls_id');
        await queryRunner.dropTable('button_configuration');
    }
}