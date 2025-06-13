import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_work_detail20250613112258 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_work_detail',
                columns: [
                    {
                        name: 'work_reference_detail_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'combination_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'work_order_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'work_order_revision', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'work_order_line_number', // Column for foreign key (composite)
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'inventory_detail_number', // Column for foreign key
                        type: 'varchar', // Assuming varchar for inventory_detail_number
                        isNullable: true
                    },
                    {
                        name: 'shipment_line_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for shipment_line_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'pick_work_detail',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'pick_work_detail',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Composite foreign key to WorkOrderDetail
        // Note: This foreign key does not include 'segment_number' from WorkOrderDetail's primary key.
        // Ensure this aligns with your schema's integrity requirements.
        await queryRunner.createForeignKey(
            'pick_work_detail',
            new TableForeignKey({
                columnNames: ['work_order_number', 'work_order_revision', 'warehouse_id', 'client_id', 'work_order_line_number'],
                referencedColumnNames: ['work_order_number', 'work_order_revision', 'warehouse_id', 'client_id', 'work_order_line_number'], // Referenced columns
                referencedTableName: 'work_order_detail',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'pick_work_detail',
            new TableForeignKey({
                columnNames: ['inventory_detail_number'],
                referencedColumnNames: ['inventory_detail_number'],
                referencedTableName: 'inventory_detail',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'pick_work_detail',
            new TableForeignKey({
                columnNames: ['shipment_line_id'],
                referencedColumnNames: ['shipment_line_id'],
                referencedTableName: 'shipment_line',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_warehouse_id');
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_client_id');
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_work_order_detail'); // Generic name for composite FK
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_inventory_detail_number');
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_shipment_line_id');
        await queryRunner.dropTable('pick_work_detail');
    }
}