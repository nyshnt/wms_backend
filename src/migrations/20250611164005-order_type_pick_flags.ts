import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uorder_type_pick_flags20250611164005 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order_type_pick_flags',
                columns: [
                    {
                        name: 'order_type_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_division_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lot_tracking_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'super_lot_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'revision_level_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'origin_code_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'supplier_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'date_in_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'sub_inventory_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'load_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'part_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'location_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'quantity_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'catch_weight_qty_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'manufacture_date_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'expiration_date_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'return_reason_id_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'version_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('order_type_pick_flags', [
            new TableForeignKey({
                columnNames: ['order_type_code'],
                referencedColumnNames: ['order_type_code'],
                referencedTableName: 'order_type_rf_pick_validation',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'order_type_rf_pick_validation',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_type_pick_flags', 'FK_order_type_pick_flags_order_type_code');
        await queryRunner.dropForeignKey('order_type_pick_flags', 'FK_order_type_pick_flags_warehouse_id');
        await queryRunner.dropTable('order_type_pick_flags');
    }
}
