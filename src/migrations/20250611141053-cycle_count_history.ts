import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucycle_count_history20250611141053 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cycle_count_history',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'count_batch_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'count_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'original_count_batch_number',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_identifier_1',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('cycle_count_history',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('cycle_count_history',
            new TableForeignKey({
                columnNames: ['count_batch_number'],
                referencedColumnNames: ['count_batch_number'],
                referencedTableName: 'cycle_count_header',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_history', 'FK_cycle_count_history_warehouse_id');
        await queryRunner.dropForeignKey('cycle_count_history', 'FK_cycle_count_history_count_batch_number');
        await queryRunner.dropTable('cycle_count_history');
    }
}
