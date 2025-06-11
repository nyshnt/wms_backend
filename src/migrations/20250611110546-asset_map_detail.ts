import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_map_detail20250611110546 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_map_detail',
                columns: [
                    {
                        name: 'map_detail_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('asset_map_detail');
    }
}
