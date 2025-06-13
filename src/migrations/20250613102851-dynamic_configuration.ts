import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udynamic_configuration20250613102851 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKey(
            'dynamic_configuration',
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'dynamic_configuration',
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'dynamic_configuration',
            new TableForeignKey({
                columnNames: ['command_id'],
                referencedColumnNames: ['command_id'], // Assuming command_id is unique/primary in command_configuration
                referencedTableName: 'command_configuration',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'dynamic_configuration',
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_application_id');
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_form_id');
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_command_id');
        await queryRunner.dropForeignKey('dynamic_configuration', 'FK_dynamic_configuration_modification_user_id');
        await queryRunner.dropTable('dynamic_configuration');
    }
}