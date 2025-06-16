import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udynamic_configuration20250613102851 implements MigrationInterface {
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
                name: 'dynamic_configuration',
                columns: [
                    {
                        name: 'dynamic_config_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'application_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'form_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'addon_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'input_mode',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'variable_name_list',
                        type: 'simple-array',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'command_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613102851-dynamic_configuration.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613102851-dynamic_configuration.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613102851-dynamic_configuration.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613102851-dynamic_configuration.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_application_id');
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_form_id');
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_command_id');
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_modification_user_id');
        await queryRunner.dropTable('dynamic_configuration');
    }
}