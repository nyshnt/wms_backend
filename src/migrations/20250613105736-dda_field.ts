import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udda_field20250613105736 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dda_field',
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
                        name: 'dda_field_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'link_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
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
                        name: 'default_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'display_only_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'context_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'primary_key_field_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'primary_key_layout_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'aggregate_function',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'link_dda_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'filter_group_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to DDAMaster
        await queryRunner.createForeignKey(
            'dda_field',
            new TableForeignKey({
                columnNames: ['dda_id', 'customer_level'],
                referencedColumnNames: ['dda_id', 'customer_level'], // Assuming these form the composite primary key of dda_master
                referencedTableName: 'dda_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'dda_field',
            new TableForeignKey({
                columnNames: ['link_dda_id'],
                referencedColumnNames: ['dda_id'], // Assuming 'dda_id' is unique/primary in dda_master for this FK
                referencedTableName: 'dda_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'dda_field',
            new TableForeignKey({
                columnNames: ['filter_group_id'],
                referencedColumnNames: ['filter_group_id'], // Assuming 'filter_group_id' is unique/primary in dda_filter_group for this FK
                referencedTableName: 'dda_filter_group',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_field', 'FK_dda_field_dda_master_composite'); // Generic name for composite FK
        await queryRunner.dropForeignKey('dda_field', 'FK_dda_field_link_dda_id');
        await queryRunner.dropForeignKey('dda_field', 'FK_dda_field_filter_group_id');
        await queryRunner.dropTable('dda_field');
    }
}