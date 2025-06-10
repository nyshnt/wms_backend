import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uinventory_hold20250610170256 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'inventory_hold',
                columns: [
                    {
                        name: 'hold_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'inventory_detail_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'hold_prefix',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'hold_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'hold_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('inventory_hold', [
            new TableForeignKey({
                columnNames: ['hold_number'],
                referencedColumnNames: ['hold_number'],
                referencedTableName: 'hold_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['inventory_detail_number'],
                referencedColumnNames: ['inventory_detail_number'],
                referencedTableName: 'inventory_detail',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['hold_prefix'],
                referencedColumnNames: ['hold_prefix'],
                referencedTableName: 'hold_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'hold_master',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_hold_number');
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_inventory_detail_number');
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_hold_prefix');
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_warehouse_id');
        await queryRunner.dropTable('inventory_hold');
    }
}
