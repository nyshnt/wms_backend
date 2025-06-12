import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ulocale_master20250612114430 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'location_master',
                columns: [
                    {
                        name: 'stock_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'storage_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'area_code',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('location_master', [
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['area_code'],
                referencedColumnNames: ['area_code'],
                referencedTableName: 'area_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('location_master', 'FK_location_master_warehouse_id');
        await queryRunner.dropForeignKey('location_master', 'FK_location_master_area_code');
        await queryRunner.dropTable('location_master');
    }
}
