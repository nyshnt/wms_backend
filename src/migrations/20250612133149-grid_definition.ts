import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ugrid_definition20250612133149 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'grid_definition',
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
                        name: 'customer_level',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'parent_level_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'grid_variable_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'grid_command',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'parent_column',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'child_column',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'grid_menu_name',
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

        // Note: The foreign key for 'parent_level_id' references 'level_id' in 'grid_definition'.
        // If 'grid_definition' has a composite primary key, ensure 'level_id' alone is unique
        // or consider a composite foreign key if the parent relationship involves the full primary key.
        await queryRunner.createForeignKey(
            'grid_definition',
            new TableForeignKey({
                columnNames: ['parent_level_id'],
                referencedColumnNames: ['level_id'], // Assuming 'level_id' is uniquely referenced
                referencedTableName: 'grid_definition',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'grid_definition',
            new TableForeignKey({
                columnNames: ['application_id'],
                referencedColumnNames: ['application_id'], // Assuming application_id is unique/primary in workflow_application
                referencedTableName: 'workflow_application',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'grid_definition',
            new TableForeignKey({
                columnNames: ['form_id'],
                referencedColumnNames: ['form_id'], // Assuming form_id is unique/primary in workflow_form
                referencedTableName: 'workflow_form',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grid_definition', 'FK_grid_definition_parent_level_id');
        await queryRunner.dropForeignKey('grid_definition', 'FK_grid_definition_application_id');
        await queryRunner.dropForeignKey('grid_definition', 'FK_grid_definition_form_id');
        await queryRunner.dropTable('grid_definition');
    }
}