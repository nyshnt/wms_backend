import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uhold_master_note20250610170044 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'hold_master_note',
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
                        name: 'note_line_number',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'note_text',
                        type: 'text',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('hold_master_note', [
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
        await queryRunner.dropForeignKey('hold_master_note', 'FK_hold_master_note_hold_number');
        await queryRunner.dropForeignKey('hold_master_note', 'FK_hold_master_note_hold_prefix');
        await queryRunner.dropForeignKey('hold_master_note', 'FK_hold_master_note_warehouse_id');
        await queryRunner.dropTable('hold_master_note');
    }
}
