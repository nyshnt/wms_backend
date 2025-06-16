import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ustorage_zone_configuration_header20250611123025 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611123025-storage_zone_configuration_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611123025-storage_zone_configuration_header.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611123025-storage_zone_configuration_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('storage_zone_configuration_header', 'FK_storage_zone_configuration_header_warehouse');
        await queryRunner.dropForeignKey('storage_zone_configuration_header', 'FK_storage_zone_configuration_header_building_master');
        await queryRunner.dropForeignKey('storage_zone_configuration_header', 'FK_storage_zone_configuration_header_storage_zone');
        await queryRunner.dropTable('storage_zone_configuration_header');
    }
}
