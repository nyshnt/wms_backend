import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Unavigation_bar_tab20250611164744 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Navigation_Bar_Tab',
                columns: [
                    {
                        name: 'navigation_bar_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'all_users_flag',
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

        await queryRunner.createForeignKeys('Navigation_Bar_Tab', [
            new TableForeignKey({
                columnNames: ['navigation_bar_id'],
                referencedColumnNames: ['navigation_bar_id'],
                referencedTableName: 'user_navigation_bar',
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
        await queryRunner.dropForeignKey('Navigation_Bar_Tab', 'FK_Navigation_Bar_Tab_navigation_bar_id');
        await queryRunner.dropForeignKey('Navigation_Bar_Tab', 'FK_Navigation_Bar_Tab_menu_group_id');
        await queryRunner.dropTable('Navigation_Bar_Tab');
    }
}
