import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Umenu_item20250611165308 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Menu_Item',
                columns: [
                    {
                        name: 'menu_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_item_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_sequence',
                        type: 'int',
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

        await queryRunner.createForeignKeys('Menu_Item', [
            new TableForeignKey({
                columnNames: ['menu_group_id'],
                referencedColumnNames: ['menu_group_id'],
                referencedTableName: 'menu_group',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['menu_item_id'],
                referencedColumnNames: ['option_name'],
                referencedTableName: 'menu_option',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Menu_Item', 'FK_Menu_Item_menu_group_id');
        await queryRunner.dropForeignKey('Menu_Item', 'FK_Menu_Item_menu_item_id');
        await queryRunner.dropTable('Menu_Item');
    }
}
