import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcm_area20250611153003 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_area',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'area_code',
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

        await queryRunner.createForeignKey('wcs_area',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('wcs_area',
            new TableForeignKey({
                columnNames: ['area_code'],
                referencedColumnNames: ['area_code'],
                referencedTableName: 'area_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('wcs_area',
            new TableForeignKey({
                columnNames: ['wcs_id'],
                referencedColumnNames: ['wcs_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_area', 'FK_wcs_area_warehouse_id');
        await queryRunner.dropForeignKey('wcs_area', 'FK_wcs_area_area_code');
        await queryRunner.dropForeignKey('wcs_area', 'FK_wcs_area_wcs_id');
        await queryRunner.dropTable('wcs_area');
    }
}
