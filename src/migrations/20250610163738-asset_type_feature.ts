import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uasset_type_feature20250610163738 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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
            await queryRunner.createForeignKey(
                'asset_type_feature',
                new TableForeignKey({
                    columnNames: ['asset_type'],
                    referencedColumnNames: ['asset_type'],
                    referencedTableName: 'asset_type',
                    onDelete: 'CASCADE',
                }),
            );
        } else {
            console.log('Skipping foreign key creation for asset_type as the asset_type table does not exist yet.');
        }

        const assetFeatureTableExists = await queryRunner.hasTable('asset_feature');
        if (assetFeatureTableExists) {
            await queryRunner.createForeignKey(
                'asset_type_feature',
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
