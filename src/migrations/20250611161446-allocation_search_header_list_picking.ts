import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uallocation_search_header_list_picking20250611161446 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'allocation_search_header_list_picking',
                columns: [
                    {
                        name: 'allocation_search_id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'area_code',
                        type: 'varchar'
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'building_id',
                        type: 'varchar'
                    },
                    {
                        name: 'search_path_type',
                        type: 'varchar'
                    },
                    {
                        name: 'threshold_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'list_pick_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'load_division_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('allocation_search_header_list_picking', [
            new TableForeignKey({
                columnNames: ['area_code'],
                referencedColumnNames: ['area_code'],
                referencedTableName: 'area_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'area_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['building_id'],
                referencedColumnNames: ['building_id'],
                referencedTableName: 'building_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('allocation_search_header_list_picking', 'FK_allocation_search_header_list_picking_area_code');
        await queryRunner.dropForeignKey('allocation_search_header_list_picking', 'FK_allocation_search_header_list_picking_warehouse_id');
        await queryRunner.dropForeignKey('allocation_search_header_list_picking', 'FK_allocation_search_header_list_picking_building_id');
        await queryRunner.dropTable('allocation_search_header_list_picking');
    }
}
