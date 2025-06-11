import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uapplication_authorization_role20250611155228 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Application_Auth_Role',
                columns: [
                    {
                        name: 'role_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'parent_role_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'auth_group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'adjustment_threshold_cost',
                        type: 'decimal',
                        isNullable: true
                    },
                    {
                        name: 'adjustment_threshold_unit',
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

        await queryRunner.createForeignKey('Application_Auth_Role',
            new TableForeignKey({
                columnNames: ['parent_role_id'],
                referencedColumnNames: ['role_id'],
                referencedTableName: 'Application_Auth_Role',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Application_Auth_Role', 'FK_Application_Auth_Role_parent_role_id');
        await queryRunner.dropTable('Application_Auth_Role');
    }
}
