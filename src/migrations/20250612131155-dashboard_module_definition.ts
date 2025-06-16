import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udashboard_module_definition20250612131155 implements MigrationInterface {
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
                name: 'dashboard_module_definition',
                columns: [
                    {
                        name: 'module_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'module_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'module_width',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'module_height',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'refresh_seconds',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'dashboard_dda_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // Assuming nullable as it's not primary and JoinColumn is used directly
                    },
                    {
                        name: 'dda_qualifier',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'option_name', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // Assuming nullable
                    },
                    {
                        name: 'webservice_wsdl_url',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'webservice_service_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'webservice_port_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'webservice_wsml_content',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'webservice_function_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'custom_subscribe_handler',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'custom_unsubscribe_handler',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'moca_connection_string',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'multi_instance_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'session_qualifiers',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612131155-dashboard_module_definition.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612131155-dashboard_module_definition.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dashboard_module_definition', 'FK_dashboard_module_definition_dashboard_dda_id');
        await queryRunner.dropForeignKey('dashboard_module_definition', 'FK_dashboard_module_definition_option_name');
        await queryRunner.dropTable('dashboard_module_definition');
    }
}