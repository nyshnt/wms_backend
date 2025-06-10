import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_service_inventory_status20250610173330 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Warehouse_Service_Inventory_Status',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_status',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('Warehouse_Service_Inventory_Status', [
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'service_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['inventory_status'],
                referencedColumnNames: ['inventory_status'],
                referencedTableName: 'inventory_status',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Warehouse_Service_Inventory_Status', 'FK_warehouse_service_inventory_status_service_master');
        await queryRunner.dropForeignKey('Warehouse_Service_Inventory_Status', 'FK_warehouse_service_inventory_status_warehouse');
        await queryRunner.dropForeignKey('Warehouse_Service_Inventory_Status', 'FK_warehouse_service_inventory_status_inventory_status');
        await queryRunner.dropTable('Warehouse_Service_Inventory_Status');
    }
}
