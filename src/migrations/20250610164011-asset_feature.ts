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

        await queryRunner.createForeignKey(
            'asset_feature',
            new TableForeignKey({
                columnNames: ['asset_id'],
                referencedColumnNames: ['asset_id'],
                referencedTableName: 'service_asset',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_feature', 'FK_asset_feature_asset_id');
        await queryRunner.dropTable('asset_feature');
    }
}
