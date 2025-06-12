import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upermission_role_association20250612103609 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Permission_Role_Association',
                columns: [
                    {
                        name: 'permission_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'role_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'permission_mask',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('Permission_Role_Association', [
            new TableForeignKey({
                columnNames: ['permission_id'],
                referencedColumnNames: ['permission_id'],
                referencedTableName: 'application_auth_permission',
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
        await queryRunner.dropForeignKey('Permission_Role_Association', 'FK_Permission_Role_Association_permission_id');
        await queryRunner.dropForeignKey('Permission_Role_Association', 'FK_Permission_Role_Association_role_id');
        await queryRunner.dropTable('Permission_Role_Association');
    }
}
