import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucarton_master_asset_list_picking20250611163526 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'carton_master_asset_list_picking',
                columns: [
                    {
                        name: 'carton_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'carton_length',
                        type: 'int'
                    },
                    {
                        name: 'carton_width',
                        type: 'int'
                    },
                    {
                        name: 'carton_height',
                        type: 'int'
                    },
                    {
                        name: 'carton_weight',
                        type: 'int'
                    },
                    {
                        name: 'carton_volume',
                        type: 'int'
                    },
                    {
                        name: 'carton_footprint_code',
                        type: 'varchar'
                    },
                    {
                        name: 'last_carton_footprint_code',
                        type: 'varchar'
                    },
                    {
                        name: 'pick_order_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'pre_print_label_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'ship_overflow_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('carton_master_asset_list_picking',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('carton_master_asset_list_picking', 'FK_carton_master_asset_list_picking_warehouse_id');
        await queryRunner.dropTable('carton_master_asset_list_picking');
    }
}
