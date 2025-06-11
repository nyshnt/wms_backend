import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list_sequence_criteria20250611163124 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_list_sequence_criteria',
                columns: [
                    {
                        name: 'pick_list_sequence_criteria_id',
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
                        name: 'table_name',
                        type: 'varchar'
                    },
                    {
                        name: 'field_name',
                        type: 'varchar'
                    },
                    {
                        name: 'sort_order',
                        type: 'varchar'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('pick_list_sequence_criteria',
            new TableForeignKey({
                columnNames: ['pick_list_rule_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pick_list_rule',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_sequence_criteria', 'FK_pick_list_sequence_criteria_pick_list_rule_id');
        await queryRunner.dropTable('pick_list_sequence_criteria');
    }
}
