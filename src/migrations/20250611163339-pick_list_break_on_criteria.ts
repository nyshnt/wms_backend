import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list_break_on_criteria20250611163339 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_list_break_on_criteria',
                columns: [
                    {
                        name: 'pick_list_break_on_criteria_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'pick_list_rule_id',
                        type: 'varchar'
                    },
                    {
                        name: 'break_on_function',
                        type: 'varchar'
                    },
                    {
                        name: 'break_on_field',
                        type: 'varchar'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    },
                    {
                        name: 'max_weight_per_break',
                        type: 'int'
                    },
                    {
                        name: 'max_volume_per_break',
                        type: 'int'
                    },
                    {
                        name: 'max_quantity_per_break',
                        type: 'int'
                    },
                    {
                        name: 'volume_threshold_per_break',
                        type: 'int'
                    },
                    {
                        name: 'max_additional_pick_weight',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('pick_list_break_on_criteria',
            new TableForeignKey({
                columnNames: ['pick_list_rule_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pick_list_rule',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_break_on_criteria', 'FK_pick_list_break_on_criteria_pick_list_rule_id');
        await queryRunner.dropTable('pick_list_break_on_criteria');
    }
}
