import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcm_inventory_receiving_configuration20250611153324 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_inventory_receiving_configuration',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'field_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sort_sequence',
                        type: 'int',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('wcs_inventory_receiving_configuration',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('wcs_inventory_receiving_configuration',
            new TableForeignKey({
                columnNames: ['wcs_id'],
                referencedColumnNames: ['wcs_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_inventory_receiving_configuration', 'FK_wcs_inventory_receiving_configuration_warehouse_id');
        await queryRunner.dropForeignKey('wcs_inventory_receiving_configuration', 'FK_wcs_inventory_receiving_configuration_wcs_id');
        await queryRunner.dropTable('wcs_inventory_receiving_configuration');
    }
}
