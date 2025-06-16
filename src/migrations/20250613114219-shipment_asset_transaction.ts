import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ushipment_asset_transaction20250613114219 implements MigrationInterface {
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
                        type: 'uuid', // Assuming uuid based on AssetMaster.asset_id type
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114219-shipment_asset_transaction.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114219-shipment_asset_transaction.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114219-shipment_asset_transaction.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('shipment_asset_transaction', 'FK_shipment_asset_transaction_warehouse_id');
        await queryRunner.dropForeignKey('shipment_asset_transaction', 'FK_shipment_asset_transaction_client_id');
        await queryRunner.dropForeignKey('shipment_asset_transaction', 'FK_shipment_asset_transaction_asset_id');
        await queryRunner.dropTable('shipment_asset_transaction');
    }
}