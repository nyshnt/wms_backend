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

        await queryRunner.createForeignKeys('service_asset_feature', [
            new TableForeignKey({
                columnNames: ['asset_id'],
                referencedColumnNames: ['asset_id'],
                referencedTableName: 'service_asset',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['feature_id'],
                referencedColumnNames: ['feature_id'],
                referencedTableName: 'asset_feature',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service_asset_feature', 'FK_service_asset_feature_asset_id');
        await queryRunner.dropForeignKey('service_asset_feature', 'FK_service_asset_feature_feature_id');
        await queryRunner.dropTable('service_asset_feature');
    }
}
