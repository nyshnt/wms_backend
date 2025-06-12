import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udda_master20250612130638 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dda_master',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'dda_usage',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'top_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'dda_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'dda_qualifier',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'dda_initial_qualifier',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'dda_form',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'dda_image',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'initial_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'radio_figure',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'summary_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'excel_figure',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'excel_template',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'reference_info',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'tree_node_widget_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'grid_position',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'publish_data_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'profile_criteria_mode',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'auto_find_flag',
                        type: 'boolean',
                        isNullable: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dda_master');
    }
}