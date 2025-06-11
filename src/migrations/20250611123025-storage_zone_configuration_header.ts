import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ustorage_zone_configuration_header20250611123025 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'storage_zone_configuration_header',
                columns: [
                    {
                        name: 'storage_zone_configuration_id',
                        type: 'varchar',
                        isPrimary: true
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
                        name: 'storage_zone_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int'
                    },
                    {
                        name: 'strategy',
                        type: 'varchar'
                    },
                    {
                        name: 'minimum_level',
                        type: 'int'
                    },
                    {
                        name: 'maximum_level',
                        type: 'int'
                    },
                    {
                        name: 'maximum_load_per_aisle',
                        type: 'int'
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('storage_zone_configuration_header',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('storage_zone_configuration_header',
            new TableForeignKey({
                columnNames: ['building_id'],
                referencedColumnNames: ['building_id'],
                referencedTableName: 'building_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('storage_zone_configuration_header',
            new TableForeignKey({
                columnNames: ['storage_zone_id'],
                referencedColumnNames: ['storage_zone_id'],
                referencedTableName: 'storage_zone',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('storage_zone_configuration_header', 'FK_storage_zone_configuration_header_warehouse');
        await queryRunner.dropForeignKey('storage_zone_configuration_header', 'FK_storage_zone_configuration_header_building_master');
        await queryRunner.dropForeignKey('storage_zone_configuration_header', 'FK_storage_zone_configuration_header_storage_zone');
        await queryRunner.dropTable('storage_zone_configuration_header');
    }
}
