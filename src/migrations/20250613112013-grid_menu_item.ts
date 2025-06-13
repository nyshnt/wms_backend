import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ugrid_menu_item20250613112013 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'grid_menu_item',
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
                        name: 'level_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_item_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'menu_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enable_formula',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'selection_rule',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'parent_item_name', // Column for self-referencing foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'button_key', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to GridDefinition (based on GridDefinition's primary key)
        await queryRunner.createForeignKey(
            'grid_menu_item',
            new TableForeignKey({
                columnNames: ['application_id', 'form_id', 'level_id', 'addon_id'],
                referencedColumnNames: ['application_id', 'form_id', 'level_id', 'addon_id'], // Assuming these form the composite primary key of grid_definition
                referencedTableName: 'grid_definition',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        // Separate foreign key for grid_variable_name to GridDefinition
        // Note: This assumes 'grid_variable_name' is a unique key in 'grid_definition'
        await queryRunner.createForeignKey(
            'grid_menu_item',
            new TableForeignKey({
                columnNames: ['grid_variable_name'],
                referencedColumnNames: ['grid_variable_name'],
                referencedTableName: 'grid_definition',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Separate foreign key for customer_level to GridDefinition
        // Note: This assumes 'customer_level' is a unique key in 'grid_definition'
        await queryRunner.createForeignKey(
            'grid_menu_item',
            new TableForeignKey({
                columnNames: ['customer_level'],
                referencedColumnNames: ['customer_level'],
                referencedTableName: 'grid_definition',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Self-referencing foreign key for parent_item_name
        await queryRunner.createForeignKey(
            'grid_menu_item',
            new TableForeignKey({
                columnNames: ['parent_item_name'],
                referencedColumnNames: ['menu_item_name'],
                referencedTableName: 'grid_menu_item',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'grid_menu_item',
            new TableForeignKey({
                columnNames: ['button_key'],
                referencedColumnNames: ['button_key'],
                referencedTableName: 'button_configuration',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_grid_definition_composite'); // Generic name for composite FK
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_grid_variable_name');
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_customer_level');
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_parent_item_name');
        await queryRunner.dropForeignKey('grid_menu_item', 'FK_grid_menu_item_button_key');
        await queryRunner.dropTable('grid_menu_item');
    }
}