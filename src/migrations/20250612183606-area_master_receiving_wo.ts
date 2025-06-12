import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uarea_master_receiving_wo20250612183606 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'area_master_receiving_wo',
                columns: [
                    {
                        name: 'area_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'receive_wo_non_fifo_lifo_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'default_receive_inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'area_master_receiving_wo',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'area_master_receiving_wo',
            new TableForeignKey({
                columnNames: ['default_receive_inventory_status'],
                referencedColumnNames: ['inventory_status_code'], // Referenced column is inventory_status_code in InventoryStatusMaster
                referencedTableName: 'inventory_status_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('area_master_receiving_wo', 'FK_area_master_receiving_wo_warehouse_id');
        await queryRunner.dropForeignKey('area_master_receiving_wo', 'FK_area_master_receiving_wo_default_receive_inventory_status');
        await queryRunner.dropTable('area_master_receiving_wo');
    }
}