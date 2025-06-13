import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udashboard_tab_module_configuration20250613105859 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dashboard_tab_module_configuration',
                columns: [
                    {
                        name: 'module_config_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'dda_qualifier',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'refresh_seconds',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'control_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'module_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'tab_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'dashboard_tab_module_configuration',
            new TableForeignKey({
                columnNames: ['module_id'],
                referencedColumnNames: ['module_id'], // Assuming module_id is unique/primary in dashboard_module_definition
                referencedTableName: 'dashboard_module_definition',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'dashboard_tab_module_configuration',
            new TableForeignKey({
                columnNames: ['tab_id'],
                referencedColumnNames: ['tab_id'],
                referencedTableName: 'dashboard_tabs',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dashboard_tab_module_configuration', 'FK_dashboard_tab_module_configuration_module_id');
        await queryRunner.dropForeignKey('dashboard_tab_module_configuration', 'FK_dashboard_tab_module_configuration_tab_id');
        await queryRunner.dropTable('dashboard_tab_module_configuration');
    }
}