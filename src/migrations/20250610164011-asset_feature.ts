import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uasset_feature20250610164011 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_feature',
                columns: [
                    {
                        name: 'feature_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'feature_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'asset_id',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        const serviceAssetTableExists = await queryRunner.hasTable('service_asset');
        if (serviceAssetTableExists) {
            await queryRunner.createForeignKey(
                'asset_feature',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('asset_feature');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('asset_feature', foreignKey);
            }
            await queryRunner.dropTable('asset_feature');
        }
    }
}
