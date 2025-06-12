import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uputaway_last_location20250612172817 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'putaway_last_location',
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
                        name: 'stock_location',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'putaway_last_location',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'putaway_last_location',
            new TableForeignKey({
                columnNames: ['area_code'],
                referencedColumnNames: ['area_code'],
                referencedTableName: 'area_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'putaway_last_location',
            new TableForeignKey({
                columnNames: ['stock_location'],
                referencedColumnNames: ['storage_location'], // Referenced column is storage_location in LocationMaster
                referencedTableName: 'location_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'putaway_last_location',
            new TableForeignKey({
                columnNames: ['part_number'],
                referencedColumnNames: ['part_number'],
                referencedTableName: 'part_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'putaway_last_location',
            new TableForeignKey({
                columnNames: ['part_client_id'],
                referencedColumnNames: ['client_id'], // Referenced column is client_id in ClientMaster
                referencedTableName: 'client_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_warehouse_id');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_area_code');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_stock_location');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_part_number');
        await queryRunner.dropForeignKey('putaway_last_location', 'FK_putaway_last_location_part_client_id');
        await queryRunner.dropTable('putaway_last_location');
    }
}