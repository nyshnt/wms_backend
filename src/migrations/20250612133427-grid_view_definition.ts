import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ugrid_view_definition20250612133427 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'grid_view_definition',
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
                        name: 'system_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_title_formula',
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

        // Composite foreign key to GridDefinition
        await queryRunner.createForeignKey(
            'grid_view_definition',
            new TableForeignKey({
                columnNames: ['level_id', 'application_id', 'form_id', 'addon_id'],
                referencedColumnNames: ['level_id', 'application_id', 'form_id', 'addon_id'], // Assuming these form the composite primary key of grid_definition
                referencedTableName: 'grid_definition',
                onDelete: 'CASCADE'
            })
        );

        // Separate foreign key for grid_variable_name to GridDefinition
        // Note: This assumes 'grid_variable_name' is a unique or primary key in 'grid_definition'
        // or that it forms part of a valid foreign key relationship as per your schema.
        await queryRunner.createForeignKey(
            'grid_view_definition',
            new TableForeignKey({
                columnNames: ['grid_variable_name'],
                referencedColumnNames: ['grid_variable_name'], // Assuming grid_variable_name is unique/primary in grid_definition
                referencedTableName: 'grid_definition',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'grid_view_definition',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_view_definition', 'FK_grid_view_definition_composite_grid_definition'); // Generic name for composite FK
        await queryRunner.dropForeignKey('grid_view_definition', 'FK_grid_view_definition_grid_variable_name');
        await queryRunner.dropForeignKey('grid_view_definition', 'FK_grid_view_definition_user_id');
        await queryRunner.dropTable('grid_view_definition');
    }
}