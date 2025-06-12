import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwork_order_detail_note20250612170218 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'work_order_detail_note',
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
                        name: 'work_order_line_number',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'int',
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

        // Composite foreign key to WorkOrderDetail
        await queryRunner.createForeignKey(
            'work_order_detail_note',
            new TableForeignKey({
                columnNames: [
                    'work_order_number',
                    'work_order_revision',
                    'warehouse_id',
                    'client_id',
                    'work_order_line_number',
                    'segment_number'
                ],
                referencedColumnNames: [
                    'work_order_number',
                    'work_order_revision',
                    'warehouse_id',
                    'client_id',
                    'work_order_line_number',
                    'segment_number'
                ], // Assuming these form the composite primary key of work_order_detail
                referencedTableName: 'work_order_detail',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        // Foreign key to Client table (client_id)
        await queryRunner.createForeignKey(
            'work_order_detail_note',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE since client_id is a primary column
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('work_order_detail_note', 'FK_work_order_detail_note_work_order_detail'); // Generic name for composite FK
        await queryRunner.dropForeignKey('work_order_detail_note', 'FK_work_order_detail_note_client_id');
        await queryRunner.dropTable('work_order_detail_note');
    }
}