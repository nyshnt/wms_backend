import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Umenu_option20250611172556 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Menu_Option',
                columns: [
                    {
                        name: 'option_name',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'option_type',
                        type: 'varchar'
                    },
                    {
                        name: 'permission_mask',
                        type: 'varchar'
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'executable_name',
                        type: 'varchar'
                    },
                    {
                        name: 'executable_parameter',
                        type: 'varchar'
                    },
                    {
                        name: 'button_image_id',
                        type: 'varchar'
                    },
                    {
                        name: 'auth_group_name',
                        type: 'varchar'
                    },
                    {
                        name: 'addon_id',
                        type: 'varchar'
                    },
                    {
                        name: 'group_name_option',
                        type: 'varchar'
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Menu_Option',
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'],
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Menu_Option', 'FK_Menu_Option_application_id');
        await queryRunner.dropTable('Menu_Option');
    }
}
