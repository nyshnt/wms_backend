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

        await queryRunner.createForeignKeys('asset_type_feature', [
            new TableForeignKey({
                columnNames: ['asset_type'],
                referencedColumnNames: ['asset_type'],
                referencedTableName: 'asset_type',
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
        await queryRunner.dropForeignKey('asset_type_feature', 'FK_asset_type_feature_asset_type');
        await queryRunner.dropForeignKey('asset_type_feature', 'FK_asset_type_feature_feature_id');
        await queryRunner.dropTable('asset_type_feature');
    }
}
