import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uprofile_master20250612133539 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'profile_master',
                columns: [
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
                        name: 'profile_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'disable_edit_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'default_profile_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'option_name', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // Assuming nullable as it's not primary and JoinColumn is used directly
                    },
                    {
                        name: 'user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // Assuming nullable
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'profile_master',
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'profile_master',
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'profile_master',
            new TableForeignKey({
                columnNames: ['option_name'],
                referencedColumnNames: ['option_name'], // Assuming option_name is unique/primary in menu_option
                referencedTableName: 'menu_option',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'profile_master',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_application_id');
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_form_id');
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_option_name');
        await queryRunner.dropForeignKey('profile_master', 'FK_profile_master_user_id');
        await queryRunner.dropTable('profile_master');
    }
}