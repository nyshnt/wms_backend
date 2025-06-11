import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list20250611161234 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_list',
                columns: [
                    {
                        name: 'pick_list_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'pick_list_type',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_list_status',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_list_rule_id',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_list_rule_group_id',
                        type: 'varchar'
                    },
                    {
                        name: 'max_pick_list_weight',
                        type: 'int'
                    },
                    {
                        name: 'max_pick_list_cube',
                        type: 'int'
                    },
                    {
                        name: 'pick_list_cube_weight_threshold',
                        type: 'int'
                    },
                    {
                        name: 'pick_list_max_add_case_weight',
                        type: 'int'
                    },
                    {
                        name: 'total_volume',
                        type: 'int'
                    },
                    {
                        name: 'total_weight',
                        type: 'int'
                    },
                    {
                        name: 'total_items',
                        type: 'int'
                    },
                    {
                        name: 'total_customers',
                        type: 'int'
                    },
                    {
                        name: 'total_clients',
                        type: 'int'
                    },
                    {
                        name: 'total_lists_in_batch',
                        type: 'int'
                    },
                    {
                        name: 'total_load_picks',
                        type: 'int'
                    },
                    {
                        name: 'total_slots',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('pick_list', [
            new TableForeignKey({
                columnNames: ['pick_list_rule_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pick_list_rule',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['pick_list_rule_group_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pick_list_rule_group',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list', 'FK_pick_list_pick_list_rule_id');
        await queryRunner.dropForeignKey('pick_list', 'FK_pick_list_pick_list_rule_group_id');
        await queryRunner.dropTable('pick_list');
    }
}
