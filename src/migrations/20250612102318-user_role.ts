import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uuser_role20250612102318 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'User_Role',
                columns: [
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'role_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'ldap_flag',
                        type: 'boolean',
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

        await queryRunner.createForeignKeys('User_Role', [
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['role_id'],
                referencedColumnNames: ['role_id'],
                referencedTableName: 'application_authorization_role',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('User_Role', 'FK_User_Role_user_id');
        await queryRunner.dropForeignKey('User_Role', 'FK_User_Role_role_id');
        await queryRunner.dropTable('User_Role');
    }
}
