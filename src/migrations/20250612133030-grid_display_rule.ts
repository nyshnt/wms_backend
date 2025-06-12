import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ugrid_display_rule20250612133030 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'grid_display_rule',
                columns: [
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
                        name: 'level_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'grid_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'grid_field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'display_rule_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'comparison_operator',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'comparison_value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'maximum_value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'foreground_color',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'background_color',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'fill_style',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'fill_color',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'font_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'font_bold_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'font_italic_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'font_strikethrough_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'font_underline_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'whole_row_flag',
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

        // Composite foreign key to GridDefinition
        await queryRunner.createForeignKey(
            'grid_display_rule',
            new TableForeignKey({
                columnNames: ['application_id', 'form_id', 'level_id', 'grid_name'],
                referencedColumnNames: ['application_id', 'form_id', 'level_id', 'grid_name'], // Assuming these form the composite primary key of grid_definition
                referencedTableName: 'grid_definition',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'grid_display_rule',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_display_rule', 'FK_grid_display_rule_grid_definition'); // Generic name for composite FK
        await queryRunner.dropForeignKey('grid_display_rule', 'FK_grid_display_rule_user_id');
        await queryRunner.dropTable('grid_display_rule');
    }
}