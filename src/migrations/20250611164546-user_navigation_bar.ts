import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uuser_navigation_bar20250611164546 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'User_Navigation_Bar',
                columns: [
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'navigation_bar_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'navigation_bar_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'menu_group_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('User_Navigation_Bar', [
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['menu_group_id'],
                referencedColumnNames: ['menu_group_id'],
                referencedTableName: 'menu_group',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('User_Navigation_Bar', 'FK_User_Navigation_Bar_user_id');
        await queryRunner.dropForeignKey('User_Navigation_Bar', 'FK_User_Navigation_Bar_menu_group_id');
        await queryRunner.dropTable('User_Navigation_Bar');
    }
}
