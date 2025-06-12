import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uasset_location_aapacity20250612171237 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_location_capacity',
                columns: [
                    {
                        name: 'asset_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'manual_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'storage_location', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'asset_location_capacity',
            new TableForeignKey({
                columnNames: ['asset_type'],
                referencedColumnNames: ['asset_type_id'], // Assuming asset_type_id is unique/primary in asset_type
                referencedTableName: 'asset_type',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'asset_location_capacity',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'asset_location_capacity',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'asset_location_capacity',
            new TableForeignKey({
                columnNames: ['storage_location'],
                referencedColumnNames: ['storage_location'],
                referencedTableName: 'location_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_asset_type');
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_client_id');
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_warehouse_id');
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_storage_location');
        await queryRunner.dropTable('asset_location_capacity');
    }
}