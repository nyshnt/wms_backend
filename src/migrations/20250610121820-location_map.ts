import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ulocation_map20250610121820 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the location_map table already exists
        const tableExists = await queryRunner.hasTable('location_map');
        if (!tableExists) {
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

            // Check if referenced tables exist before creating foreign keys
            const locationTypeTableExists = await queryRunner.hasTable('location_type');
            if (locationTypeTableExists) {
                await queryRunner.createForeignKey(
                    'location_map',
                    new TableForeignKey({
                        columnNames: ['location_type_id'],
                        referencedColumnNames: ['location_type_id'],
                        referencedTableName: 'location_type',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for location_type_id as the location_type table does not exist yet.');
            }

            const pickZoneTableExists = await queryRunner.hasTable('pick_zone');
            if (pickZoneTableExists) {
                await queryRunner.createForeignKey(
                    'location_map',
                    new TableForeignKey({
                        columnNames: ['pick_zone_id'],
                        referencedColumnNames: ['pick_zone_id'],
                        referencedTableName: 'pick_zone',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for pick_zone_id as the pick_zone table does not exist yet.');
            }

            const storageZoneTableExists = await queryRunner.hasTable('storage_zone');
            if (storageZoneTableExists) {
                await queryRunner.createForeignKey(
                    'location_map',
                    new TableForeignKey({
                        columnNames: ['storage_zone_id'],
                        referencedColumnNames: ['storage_zone_id'],
                        referencedTableName: 'storage_zone',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for storage_zone_id as the storage_zone table does not exist yet.');
            }

            const movementZoneTableExists = await queryRunner.hasTable('movement_zone');
            if (movementZoneTableExists) {
                await queryRunner.createForeignKey(
                    'location_map',
                    new TableForeignKey({
                        columnNames: ['movement_zone_id'],
                        referencedColumnNames: ['movement_zone_id'],
                        referencedTableName: 'movement_zone',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for movement_zone_id as the movement_zone table does not exist yet.');
            }

            const workZoneMasterTableExists = await queryRunner.hasTable('work_zone_master');
            if (workZoneMasterTableExists) {
                await queryRunner.createForeignKey(
                    'location_map',
                    new TableForeignKey({
                        columnNames: ['work_zone_id'],
                        referencedColumnNames: ['work_zone_id'],
                        referencedTableName: 'work_zone_master',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for work_zone_id as the work_zone_master table does not exist yet.');
            }

            const warehousesTableExists = await queryRunner.hasTable('warehouses');
            if (warehousesTableExists) {
                await queryRunner.createForeignKey(
                    'location_map',
                    new TableForeignKey({
                        columnNames: ['warehouse_id'],
                        referencedColumnNames: ['warehouse_id'],
                        referencedTableName: 'warehouses',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for warehouse_id as the warehouses table does not exist yet.');
            }

            const containerZoneTableExists = await queryRunner.hasTable('container_zone');
            if (containerZoneTableExists) {
                await queryRunner.createForeignKey(
                    'location_map',
                    new TableForeignKey({
                        columnNames: ['container_zone_id'],
                        referencedColumnNames: ['container_zone_id'],
                        referencedTableName: 'container_zone',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for container_zone_id as the container_zone table does not exist yet.');
            }
        } else {
            console.log('Skipping table creation as the location_map table already exists.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('location_map');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('location_map', foreignKey);
            }
            await queryRunner.dropTable('location_map');
        }
    }
}
