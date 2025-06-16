import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureceiving_asset20250613114433 implements MigrationInterface {
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114433-receiving_asset.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114433-receiving_asset.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114433-receiving_asset.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114433-receiving_asset.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114433-receiving_asset.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
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