import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uasset_map_media20250611111209 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_map_media',
                columns: [
                    {
                        name: 'asset_media_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'map_detail_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('asset_map_media',
            new TableForeignKey({
                columnNames: ['map_detail_id'],
                referencedColumnNames: ['map_detail_id'],
                referencedTableName: 'asset_map_detail',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_map_media', 'FK_asset_map_media_asset_map_detail');
        await queryRunner.dropTable('asset_map_media');
    }
}
