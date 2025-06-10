import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ulocation_map20250610121820 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'location_map',
                columns: [
                    {
                        name: 'location_type_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'pick_zone_id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'storage_zone_id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'movement_zone_id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'work_zone_id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'container_zone_id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'storage_location',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'location_map',
            new TableForeignKey({
                columnNames: ['location_type_id'],
                referencedColumnNames: ['location_type_id'],
                referencedTableName: 'location_type',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'location_map',
            new TableForeignKey({
                columnNames: ['pick_zone_id'],
                referencedColumnNames: ['pick_zone_id'],
                referencedTableName: 'pick_zone',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'location_map',
            new TableForeignKey({
                columnNames: ['storage_zone_id'],
                referencedColumnNames: ['storage_zone_id'],
                referencedTableName: 'storage_zone',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'location_map',
            new TableForeignKey({
                columnNames: ['movement_zone_id'],
                referencedColumnNames: ['movement_zone_id'],
                referencedTableName: 'movement_zone',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'location_map',
            new TableForeignKey({
                columnNames: ['work_zone_id'],
                referencedColumnNames: ['work_zone_id'],
                referencedTableName: 'work_zone_master',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'location_map',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouses',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'location_map',
            new TableForeignKey({
                columnNames: ['container_zone_id'],
                referencedColumnNames: ['container_zone_id'],
                referencedTableName: 'container_zone',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('location_map', 'FK_location_map_location_type_id');
        await queryRunner.dropForeignKey('location_map', 'FK_location_map_pick_zone_id');
        await queryRunner.dropForeignKey('location_map', 'FK_location_map_storage_zone_id');
        await queryRunner.dropForeignKey('location_map', 'FK_location_map_movement_zone_id');
        await queryRunner.dropForeignKey('location_map', 'FK_location_map_work_zone_id');
        await queryRunner.dropForeignKey('location_map', 'FK_location_map_warehouse_id');
        await queryRunner.dropForeignKey('location_map', 'FK_location_map_container_zone_id');
        await queryRunner.dropTable('location_map');
    }
}
