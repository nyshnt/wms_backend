import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udda_action20250612184555 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dda_action',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'action_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'action_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'action_form',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'image_link',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'action_initial_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'action_post_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'radio_figure',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'auto_clear_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'submit_button_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'post_action_mls_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to DDAMaster
        await queryRunner.createForeignKey(
            'dda_action',
            new TableForeignKey({
                columnNames: ['dda_id', 'customer_level'],
                referencedColumnNames: ['dda_id', 'customer_level'], // Assuming these form the composite primary key of dda_master
                referencedTableName: 'dda_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'dda_action',
            new TableForeignKey({
                columnNames: ['submit_button_mls_id'],
                referencedColumnNames: ['category_id'], // Assuming category_id is the primary key for MultiLanguageSupportCategory
                referencedTableName: 'multi_language_support_category',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'dda_action',
            new TableForeignKey({
                columnNames: ['post_action_mls_id'],
                referencedColumnNames: ['category_id'], // Assuming category_id is the primary key for MultiLanguageSupportCategory
                referencedTableName: 'multi_language_support_category',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_action', 'FK_dda_action_dda_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('dda_action', 'FK_dda_action_submit_button_mls_id');
        await queryRunner.dropForeignKey('dda_action', 'FK_dda_action_post_action_mls_id');
        await queryRunner.dropTable('dda_action');
    }
}