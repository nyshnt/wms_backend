import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udda_filter_group20250612130519 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'dda_filter_group',
                columns: [
                    {
                        name: 'filter_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'group_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'attach_location',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'attach_offset',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'parent_group_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'attach_group_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Note: The following foreign keys for parent_group_id and attach_group_id
        // reference a single column in a table that has a composite primary key.
        // Ensure that 'filter_group_id' alone is a unique key in 'dda_filter_group'
        // or consider defining a composite foreign key if required.
        await queryRunner.createForeignKey(
            'dda_filter_group',
            new TableForeignKey({
                columnNames: ['parent_group_id'],
                referencedColumnNames: ['filter_group_id'],
                referencedTableName: 'dda_filter_group',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'dda_filter_group',
            new TableForeignKey({
                columnNames: ['attach_group_id'],
                referencedColumnNames: ['filter_group_id'],
                referencedTableName: 'dda_filter_group',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'dda_filter_group',
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dda_filter_group', 'FK_dda_filter_group_parent_group_id');
        await queryRunner.dropForeignKey('dda_filter_group', 'FK_dda_filter_group_attach_group_id');
        await queryRunner.dropForeignKey('dda_filter_group', 'FK_dda_filter_group_modification_user_id');
        await queryRunner.dropTable('dda_filter_group');
    }
}