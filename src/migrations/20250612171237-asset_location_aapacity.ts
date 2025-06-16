import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_location_aapacity20250612171237 implements MigrationInterface {
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171237-asset_location_aapacity.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171237-asset_location_aapacity.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171237-asset_location_aapacity.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612171237-asset_location_aapacity.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_asset_type');
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_client_id');
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_warehouse_id');
        await queryRunner.dropForeignKey('asset_location_capacity', 'FK_asset_location_capacity_storage_location');
        await queryRunner.dropTable('asset_location_capacity');
    }
}