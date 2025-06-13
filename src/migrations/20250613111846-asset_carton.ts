import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uasset_carton20250613111846 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_carton',
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
                        name: 'asset_type_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_type_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        // Composite foreign key to CartonMasterAssetListPicking
        await queryRunner.createForeignKey(
            'asset_carton',
            new TableForeignKey({
                columnNames: ['carton_code', 'warehouse_id'],
                referencedColumnNames: ['carton_code', 'warehouse_id'], // Assuming these form the composite primary key of carton_master_asset_list_picking
                referencedTableName: 'carton_master_asset_list_picking',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'asset_carton',
            new TableForeignKey({
                columnNames: ['asset_type_id'],
                referencedColumnNames: ['asset_type_id'],
                referencedTableName: 'asset_type_asset_list_picking',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_carton', 'FK_asset_carton_carton_master_asset_list_picking'); // Generic name for composite FK
        await queryRunner.dropForeignKey('asset_carton', 'FK_asset_carton_asset_type_id');
        await queryRunner.dropTable('asset_carton');
    }
}