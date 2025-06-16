import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_asset_feature20250610162541 implements MigrationInterface {
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
                name: 'service_asset_feature',
                columns: [
                    {
                        name: 'asset_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'feature_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'maximum_value',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'minimum_value',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'last_read_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'last_read_time',
                        type: 'time',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        const serviceAssetTableExists = await queryRunner.hasTable('service_asset');
        if (serviceAssetTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610162541-service_asset_feature.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for asset_id as the service_asset table does not exist yet.');
        }

        const assetFeatureTableExists = await queryRunner.hasTable('asset_feature');
        if (assetFeatureTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610162541-service_asset_feature.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for feature_id as the asset_feature table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('service_asset_feature');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('service_asset_feature', foreignKey);
            }
            await queryRunner.dropTable('service_asset_feature');
        }
    }
}
