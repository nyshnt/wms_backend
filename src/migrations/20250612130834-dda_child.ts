import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udda_child20250612130834 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dda_child',
                columns: [
                    {
                        name: 'dda_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_child_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dda_child_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'child_fields',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'initial_visible_flag',
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

        // Composite foreign key to DDAMaster
        await queryRunner.createForeignKey(
            'dda_child',
            new TableForeignKey({
                columnNames: ['dda_id', 'customer_level'],
                referencedColumnNames: ['dda_id', 'customer_level'],
                referencedTableName: 'dda_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_child', 'FK_dda_child_dda_id_customer_level'); // Generic name for composite FK
        await queryRunner.dropTable('dda_child');
    }
}