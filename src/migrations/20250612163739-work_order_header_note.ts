import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwork_order_header_note20250612163739 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'work_order_header_note',
                columns: [
                    {
                        name: 'work_order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_order_revision',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'note_line_number',
                        type: 'int',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to WorkOrderHeader
        await queryRunner.createForeignKey(
            'work_order_header_note',
            new TableForeignKey({
                columnNames: ['work_order_number', 'work_order_revision'],
                referencedColumnNames: ['work_order_number', 'work_order_revision'], // Assuming these form the composite primary key of work_order_header
                referencedTableName: 'work_order_header',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'work_order_header_note',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'work_order_header_note',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('work_order_header_note', 'FK_work_order_header_note_work_order_header'); // Generic name for composite FK
        await queryRunner.dropForeignKey('work_order_header_note', 'FK_work_order_header_note_warehouse_id');
        await queryRunner.dropForeignKey('work_order_header_note', 'FK_work_order_header_note_client_id');
        await queryRunner.dropTable('work_order_header_note');
    }
}