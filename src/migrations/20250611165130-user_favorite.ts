import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uuser_favorite20250611165130 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'User_Favorite',
                columns: [
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'option_name',
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

        await queryRunner.createForeignKeys('User_Favorite', [
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['option_name'],
                referencedColumnNames: ['option_name'],
                referencedTableName: 'menu_option',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('User_Favorite', 'FK_User_Favorite_user_id');
        await queryRunner.dropForeignKey('User_Favorite', 'FK_User_Favorite_option_name');
        await queryRunner.dropTable('User_Favorite');
    }
}
