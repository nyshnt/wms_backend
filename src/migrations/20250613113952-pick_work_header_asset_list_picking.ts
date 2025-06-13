import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_work_header_asset_list_picking20250613113952 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_work_header_asset_list_picking',
                columns: [
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'source_location',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'source_area_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'picked_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'approved_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'pick_status',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'load_division_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'pick_list_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for pick_list_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'asset_slot_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_slot_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'pick_work_header_asset_list_picking',
            new TableForeignKey({
                columnNames: ['pick_list_id'],
                referencedColumnNames: ['pick_list_id'],
                referencedTableName: 'pick_list_asset_list_picking',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'pick_work_header_asset_list_picking',
            new TableForeignKey({
                columnNames: ['asset_slot_id'],
                referencedColumnNames: ['asset_slot_id'],
                referencedTableName: 'pick_list_asset_slot_definition',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_work_header_asset_list_picking', 'FK_pick_work_header_asset_list_picking_pick_list_id');
        await queryRunner.dropForeignKey('pick_work_header_asset_list_picking', 'FK_pick_work_header_asset_list_picking_asset_slot_id');
        await queryRunner.dropTable('pick_work_header_asset_list_picking');
    }
}