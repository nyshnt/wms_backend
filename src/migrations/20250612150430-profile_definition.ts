import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uprofile_definition20250612150430 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'profile_definition',
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
                        name: 'profile_command',
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
            'profile_definition',
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'profile_definition',
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('profile_definition', 'FK_profile_definition_application_id');
        await queryRunner.dropForeignKey('profile_definition', 'FK_profile_definition_form_id');
        await queryRunner.dropTable('profile_definition');
    }
}