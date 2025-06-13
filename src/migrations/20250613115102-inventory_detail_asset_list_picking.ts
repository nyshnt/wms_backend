import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uinventory_detail_asset_list_picking20250613115102 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'inventory_detail_asset_list_picking',
                columns: [
                    {
                        name: 'inventory_detail_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'inventory_status_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'unit_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'unit_cases',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'unit_packs',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'sub_detail_number', // Column for foreign key
                        type: 'varchar', // Assuming varchar for sub_detail_number
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'work_reference_detail_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for work_reference_detail_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'inventory_detail_asset_list_picking',
            new TableForeignKey({
                columnNames: ['sub_detail_number'],
                referencedColumnNames: ['sub_detail_number'], // Assuming sub_detail_number is unique/primary in inventory_sub_detail_asset_list_picking
                referencedTableName: 'inventory_sub_detail_asset_list_picking',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'inventory_detail_asset_list_picking',
            new TableForeignKey({
                columnNames: ['work_reference_detail_id'],
                referencedColumnNames: ['work_reference_detail_id'],
                referencedTableName: 'pick_work_detail_asset_list_picking',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('inventory_detail_asset_list_picking', 'FK_inventory_detail_asset_list_picking_sub_detail_number');
        await queryRunner.dropForeignKey('inventory_detail_asset_list_picking', 'FK_inventory_detail_asset_list_picking_work_reference_detail_id');
        await queryRunner.dropTable('inventory_detail_asset_list_picking');
    }
}