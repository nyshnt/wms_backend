import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureceiving_asset20250613114433 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'receiving_asset',
                columns: [
                    {
                        name: 'receiving_asset_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'asset_tag',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'identified_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'received_quantity',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'carrier_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'asset_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'asset_type', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_type_id
                        isNullable: true
                    },
                    {
                        name: 'source_address_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for address_id
                        isNullable: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for client_id
                        isNullable: true
                    },
                    {
                        name: 'asset_status', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_status
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'receiving_asset',
            new TableForeignKey({
                columnNames: ['asset_id'],
                referencedColumnNames: ['asset_id'],
                referencedTableName: 'service_asset',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'receiving_asset',
            new TableForeignKey({
                columnNames: ['asset_type'],
                referencedColumnNames: ['asset_type_id'],
                referencedTableName: 'asset_type',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'receiving_asset',
            new TableForeignKey({
                columnNames: ['source_address_id'],
                referencedColumnNames: ['address_id'],
                referencedTableName: 'address_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'receiving_asset',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'receiving_asset',
            new TableForeignKey({
                columnNames: ['asset_status'],
                referencedColumnNames: ['asset_status'],
                referencedTableName: 'non_service_asset',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('receiving_asset', 'FK_receiving_asset_asset_id');
        await queryRunner.dropForeignKey('receiving_asset', 'FK_receiving_asset_asset_type');
        await queryRunner.dropForeignKey('receiving_asset', 'FK_receiving_asset_source_address_id');
        await queryRunner.dropForeignKey('receiving_asset', 'FK_receiving_asset_client_id');
        await queryRunner.dropForeignKey('receiving_asset', 'FK_receiving_asset_asset_status');
        await queryRunner.dropTable('receiving_asset');
    }
}