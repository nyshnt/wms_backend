import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list_rule_group_detail20250611160857 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_list_rule_group_detail',
                columns: [
                    {
                        name: 'pick_list_rule_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'pick_list_rule_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('pick_list_rule_group_detail', [
            new TableForeignKey({
                columnNames: ['pick_list_rule_group_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pick_list_rule_group',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['pick_list_rule_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pick_list_rule',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_rule_group_detail', 'FK_pick_list_rule_group_detail_pick_list_rule_group_id');
        await queryRunner.dropForeignKey('pick_list_rule_group_detail', 'FK_pick_list_rule_group_detail_pick_list_rule_id');
        await queryRunner.dropTable('pick_list_rule_group_detail');
    }
}
