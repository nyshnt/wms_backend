import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ushipment_asset_transaction20250612155403 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shipment_asset_transaction',
                columns: [
                    {
                        name: 'shipment_asset_transaction_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'activity_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for warehouse_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for client_id
                        isNullable: true
                    },
                    {
                        name: 'asset_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid for asset_id based on AssetMaster's PrimaryGeneratedColumn
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'shipment_asset_transaction',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'shipment_asset_transaction',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'shipment_asset_transaction',
            new TableForeignKey({
                columnNames: ['asset_id'],
                referencedColumnNames: ['asset_id'],
                referencedTableName: 'asset_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('shipment_asset_transaction', 'FK_shipment_asset_transaction_warehouse_id');
        await queryRunner.dropForeignKey('shipment_asset_transaction', 'FK_shipment_asset_transaction_client_id');
        await queryRunner.dropForeignKey('shipment_asset_transaction', 'FK_shipment_asset_transaction_asset_id');
        await queryRunner.dropTable('shipment_asset_transaction');
    }
}