import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udashboard_tab_assignment20250612131321 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKey(
            'dashboard_module_definition',
            new TableForeignKey({
                columnNames: ['dashboard_dda_id'],
                referencedColumnNames: ['dda_id'], // Assuming dda_id is unique/primary in dda_master for this FK
                referencedTableName: 'dda_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'dashboard_module_definition',
            new TableForeignKey({
                columnNames: ['option_name'],
                referencedColumnNames: ['option_name'], // Assuming option_name is unique/primary in menu_option_dashboard
                referencedTableName: 'menu_option_dashboard',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dashboard_module_definition', 'FK_dashboard_module_definition_dashboard_dda_id');
        await queryRunner.dropForeignKey('dashboard_module_definition', 'FK_dashboard_module_definition_option_name');
        await queryRunner.dropTable('dashboard_module_definition');
    }
}