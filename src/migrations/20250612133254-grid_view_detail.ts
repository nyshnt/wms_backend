import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ugrid_view_detail20250612133254 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'grid_view_detail',
                columns: [
                    {
                        name: 'level_id',
                        type: 'varchar',
                        isPrimary: true
                    },
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
                        name: 'addon_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'grid_variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'view_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'view_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'view_field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'view_field_width',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'view_field_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'view_field_visible_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'view_field_sort_order',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'view_field_sort_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'view_group_order',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'view_formula',
                        type: 'varchar',
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

        // Composite foreign key to GridViewDefinition
        await queryRunner.createForeignKey(
            'grid_view_detail',
            new TableForeignKey({
                columnNames: [
                    'level_id',
                    'application_id',
                    'form_id',
                    'addon_id',
                    'grid_variable_name',
                    'view_name',
                    'user_id',
                    'view_type'
                ],
                referencedColumnNames: [
                    'level_id',
                    'application_id',
                    'form_id',
                    'addon_id',
                    'grid_variable_name',
                    'view_name',
                    'user_id',
                    'view_type'
                ], // Assuming these form the composite primary key of grid_view_definition
                referencedTableName: 'grid_view_definition',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_view_detail', 'FK_grid_view_detail_grid_view_definition'); // Generic name for composite FK
        await queryRunner.dropTable('grid_view_detail');
    }
}