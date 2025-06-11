import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uarea_inventory_status20250611155432 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'area_inventory_status',
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
                        name: 'inventory_status_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('area_inventory_status', [
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'area_master_pickface',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['area_code'],
                referencedColumnNames: ['area_code'],
                referencedTableName: 'area_master_pickface',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['inventory_status_code'],
                referencedColumnNames: ['inventory_status_code'],
                referencedTableName: 'inventory_status_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_warehouse_id');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_area_code');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_inventory_status_code');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_insert_user_id');
        await queryRunner.dropForeignKey('area_inventory_status', 'FK_area_inventory_status_modification_user_id');
        await queryRunner.dropTable('area_inventory_status');
    }
}
