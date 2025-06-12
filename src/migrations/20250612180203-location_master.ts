import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ulocation_master20250612180203 implements MigrationInterface {
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
                        name: 'area_code', // Column for foreign key
                        type: 'varchar',
                        isNullable: false // Column defined with @Column without nullable:true is not nullable
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'location_master',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FK
            })
        );

        await queryRunner.createForeignKey(
            'location_master',
            new TableForeignKey({
                columnNames: ['area_code'],
                referencedColumnNames: ['area_code'],
                referencedTableName: 'area_master',
                onDelete: 'CASCADE' // Assuming CASCADE as area_code is not nullable here
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('location_master', 'FK_location_master_warehouse_id');
        await queryRunner.dropForeignKey('location_master', 'FK_location_master_area_code');
        await queryRunner.dropTable('location_master');
    }
}