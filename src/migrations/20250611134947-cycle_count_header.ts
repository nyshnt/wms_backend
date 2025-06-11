import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucycle_count_header20250611134947 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cycle_count_header',
                columns: [
                    {
                        name: 'count_batch_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'creation_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'inventory_identifier_1',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_value_1',
                        type: 'varchar'
                    },
                    {
                        name: 'identifier_flag_1',
                        type: 'boolean'
                    },
                    {
                        name: 'sequence_number',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('cycle_count_header',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('cycle_count_header',
            new TableForeignKey({
                columnNames: ['sequence_number'],
                referencedColumnNames: ['sequence_number'],
                referencedTableName: 'cycle_count_schedule',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_header', 'FK_cycle_count_header_warehouse_id');
        await queryRunner.dropForeignKey('cycle_count_header', 'FK_cycle_count_header_sequence_number');
        await queryRunner.dropTable('cycle_count_header');
    }
}
