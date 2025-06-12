import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upermission_control_association20250612103806 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Permission_Control_Association',
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
                        name: 'control_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'permission_mask',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'hidden_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'web_control_type',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('Permission_Control_Association', [
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
            }),
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'],
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_permission_id');
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_role_id');
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_application_id');
        await queryRunner.dropForeignKey('Permission_Control_Association', 'FK_Permission_Control_Association_form_id');
        await queryRunner.dropTable('Permission_Control_Association');
    }
}
