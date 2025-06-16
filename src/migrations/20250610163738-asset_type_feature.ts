import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_type_feature20250610163738 implements MigrationInterface {
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
                name: 'asset_type_feature',
                columns: [
                    {
                        name: 'asset_type',
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
                ],
            }),
            true,
        );

        const assetTypeTableExists = await queryRunner.hasTable('asset_type');
        if (assetTypeTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610163738-asset_type_feature.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for asset_type as the asset_type table does not exist yet.');
        }

        const assetFeatureTableExists = await queryRunner.hasTable('asset_feature');
        if (assetFeatureTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610163738-asset_type_feature.ts. You should create these foreign keys when making APIs.');
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
        const table = await queryRunner.getTable('asset_type_feature');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('asset_type_feature', foreignKey);
            }
            await queryRunner.dropTable('asset_type_feature');
        }
    }
}
