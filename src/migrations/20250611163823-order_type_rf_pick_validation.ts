import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uorder_type_rf_pick_validation20250611163823 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order_type_rf_pick_validation',
                columns: [
                    {
                        name: 'order_type_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'bulk_pick_figure',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('order_type_rf_pick_validation',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_type_rf_pick_validation', 'FK_order_type_rf_pick_validation_warehouse_id');
        await queryRunner.dropTable('order_type_rf_pick_validation');
    }
}
