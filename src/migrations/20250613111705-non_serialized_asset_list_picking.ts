import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Unon_serialized_asset_list_picking20250613111705 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'non_serialized_asset_list_picking',
                columns: [
                    {
                        name: 'asset_status_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'source_address_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
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

        await queryRunner.createForeignKey(
            'non_serialized_asset_list_picking',
            new TableForeignKey({
                columnNames: ['asset_type_id'],
                referencedColumnNames: ['asset_type_id'],
                referencedTableName: 'asset_type_asset_list_picking',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('non_serialized_asset_list_picking', 'FK_non_serialized_asset_list_picking_asset_type_id');
        await queryRunner.dropTable('non_serialized_asset_list_picking');
    }
}