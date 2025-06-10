import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uhold_history20250610170626 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'hold_history',
                columns: [
                    {
                        name: 'hold_number',
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
                        name: 'hold_history_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('hold_history', [
            new TableForeignKey({
                columnNames: ['hold_number'],
                referencedColumnNames: ['hold_number'],
                referencedTableName: 'hold_master',
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
        await queryRunner.dropForeignKey('hold_history', 'FK_hold_history_hold_number');
        await queryRunner.dropForeignKey('hold_history', 'FK_hold_history_hold_prefix');
        await queryRunner.dropForeignKey('hold_history', 'FK_hold_history_warehouse_id');
        await queryRunner.dropTable('hold_history');
    }
}
