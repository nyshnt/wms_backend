import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Umenu_group20250611164947 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Menu_Group',
                columns: [
                    {
                        name: 'menu_group_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'parent_group_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'menu_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'button_image_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Menu_Group',
            new TableForeignKey({
                columnNames: ['parent_group_id'],
                referencedColumnNames: ['menu_group_id'],
                referencedTableName: 'Menu_Group',
                onDelete: 'SET NULL'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Menu_Group', 'FK_Menu_Group_parent_group_id');
        await queryRunner.dropTable('Menu_Group');
    }
}
