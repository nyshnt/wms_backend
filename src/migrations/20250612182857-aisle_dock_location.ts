import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uaisle_dock_location20250612182857 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'aisle_dock_location',
                columns: [
                    {
                        name: 'aisle_dock_location_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'dock_location',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'dock_mode',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'sequence_number_primary',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'sequence_number_secondary',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'aisle_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'staging_location', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'building_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'aisle_dock_location',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'aisle_dock_location',
            new TableForeignKey({
                columnNames: ['aisle_id'],
                referencedColumnNames: ['aisle_id'],
                referencedTableName: 'aisle',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'aisle_dock_location',
            new TableForeignKey({
                columnNames: ['staging_location'],
                referencedColumnNames: ['storage_location'], // Referenced column is storage_location in LocationMaster
                referencedTableName: 'location_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'aisle_dock_location',
            new TableForeignKey({
                columnNames: ['building_id'],
                referencedColumnNames: ['building_id'],
                referencedTableName: 'building_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_warehouse_id');
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_aisle_id');
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_staging_location');
        await queryRunner.dropForeignKey('aisle_dock_location', 'FK_aisle_dock_location_building_id');
        await queryRunner.dropTable('aisle_dock_location');
    }
}