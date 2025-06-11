import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcs_location20250611153842 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_location',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'stock_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('wcs_location', [
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['stock_location'],
                referencedColumnNames: ['location_id'],
                referencedTableName: 'location_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['wcs_id'],
                referencedColumnNames: ['wcs_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_location', 'FK_wcs_location_warehouse_id');
        await queryRunner.dropForeignKey('wcs_location', 'FK_wcs_location_stock_location');
        await queryRunner.dropForeignKey('wcs_location', 'FK_wcs_location_wcs_id');
        await queryRunner.dropTable('wcs_location');
    }
}
