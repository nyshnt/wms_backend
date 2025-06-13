import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_asset_feature20250610162541 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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
            await queryRunner.createForeignKey(
                'service_asset_feature',
                new TableForeignKey({
                    columnNames: ['asset_id'],
                    referencedColumnNames: ['asset_id'],
                    referencedTableName: 'service_asset',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for asset_id as the service_asset table does not exist yet.');
        }

        const assetFeatureTableExists = await queryRunner.hasTable('asset_feature');
        if (assetFeatureTableExists) {
            await queryRunner.createForeignKey(
                'service_asset_feature',
                new TableForeignKey({
                    columnNames: ['feature_id'],
                    referencedColumnNames: ['feature_id'],
                    referencedTableName: 'asset_feature',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for feature_id as the asset_feature table does not exist yet.');
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
