import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list_group_criteria20250611162656 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_list_group_criteria',
                columns: [
                    {
                        name: 'pick_list_group_criteria_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    },
                    {
                        name: 'table_name',
                        type: 'varchar'
                    },
                    {
                        name: 'field_name',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_list_rule_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('pick_list_group_criteria',
            new TableForeignKey({
                columnNames: ['pick_list_rule_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pick_list_rule',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_group_criteria', 'FK_pick_list_group_criteria_pick_list_rule_id');
        await queryRunner.dropTable('pick_list_group_criteria');
    }
}
