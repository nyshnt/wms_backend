import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcs_discrete_snapshot20250611154447 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_discrete_snapshot',
                columns: [
                    {
                        name: 'snapshot_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'load_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'stock_location',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('wcs_discrete_snapshot', [
            new TableForeignKey({
                columnNames: ['wcs_id'],
                referencedColumnNames: ['wcs_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'wcs_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['load_number'],
                referencedColumnNames: ['load_number'],
                referencedTableName: 'load_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['stock_location'],
                referencedColumnNames: ['stock_location'],
                referencedTableName: 'location_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_wcs_id');
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_warehouse_id');
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_load_number');
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_stock_location');
        await queryRunner.dropTable('wcs_discrete_snapshot');
    }
}
