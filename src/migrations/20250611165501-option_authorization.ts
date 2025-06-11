import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uoption_authorization20250611165501 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Option_Authorization',
                columns: [
                    {
                        name: 'option_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'auth_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'auth_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'permission_mask',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name_option',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('Option_Authorization', [
            new TableForeignKey({
                columnNames: ['option_name'],
                referencedColumnNames: ['option_name'],
                referencedTableName: 'menu_option',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['role_id'],
                referencedColumnNames: ['role_id'],
                referencedTableName: 'application_auth_role',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Option_Authorization', 'FK_Option_Authorization_option_name');
        await queryRunner.dropForeignKey('Option_Authorization', 'FK_Option_Authorization_role_id');
        await queryRunner.dropForeignKey('Option_Authorization', 'FK_Option_Authorization_user_id');
        await queryRunner.dropTable('Option_Authorization');
    }
}
