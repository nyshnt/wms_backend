import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucycle_count_schedule20250611134640 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cycle_count_schedule',
                columns: [
                    {
                        name: 'sequence_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'count_id',
                        type: 'varchar'
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'part_number',
                        type: 'varchar'
                    },
                    {
                        name: 'count_batch_number',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('cycle_count_schedule',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('cycle_count_schedule',
            new TableForeignKey({
                columnNames: ['part_number'],
                referencedColumnNames: ['part_number'],
                referencedTableName: 'part_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_schedule', 'FK_cycle_count_schedule_warehouse_id');
        await queryRunner.dropForeignKey('cycle_count_schedule', 'FK_cycle_count_schedule_part_number');
        await queryRunner.dropTable('cycle_count_schedule');
    }
}
