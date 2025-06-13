import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ubutton_configuration20250613102134 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'button_configuration',
                columns: [
                    {
                        name: 'button_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'button_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'button_style',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'position',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'function_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'parameters',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'event_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'permissions',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'image_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'disabled_image_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'hot_image_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'cause_validation_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'caption_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'tooltip_text_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'button_configuration',
            new TableForeignKey({
                columnNames: ['caption_mls_id'],
                referencedColumnNames: ['category_id'], // Assuming 'category_id' is the primary key for MultiLanguageSupportCategory
                referencedTableName: 'multi_language_support_category',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'button_configuration',
            new TableForeignKey({
                columnNames: ['tooltip_text_mls_id'],
                referencedColumnNames: ['category_id'], // Assuming 'category_id' is the primary key for MultiLanguageSupportCategory
                referencedTableName: 'multi_language_support_category',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('button_configuration', 'FK_button_configuration_caption_mls_id');
        await queryRunner.dropForeignKey('button_configuration', 'FK_button_configuration_tooltip_text_mls_id');
        await queryRunner.dropTable('button_configuration');
    }
}