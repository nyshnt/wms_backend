import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_carton20250613111846 implements MigrationInterface {
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
                name: 'asset_carton',
                columns: [
                    {
                        name: 'carton_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
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

        // Composite foreign key to CartonMasterAssetListPicking
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613111846-asset_carton.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613111846-asset_carton.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_carton', 'FK_asset_carton_carton_master_asset_list_picking'); // Generic name for composite FK
        await queryRunner.dropForeignKey('asset_carton', 'FK_asset_carton_asset_type_id');
        await queryRunner.dropTable('asset_carton');
    }
}