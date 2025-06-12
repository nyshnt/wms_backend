import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwork_drder_detail_instruction20250612170021 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'work_order_detail_instruction',
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
                        name: 'instruction_key',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        // Composite foreign key to WorkOrderDetail
        await queryRunner.createForeignKey(
            'work_order_detail_instruction',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('work_order_detail_instruction', 'FK_work_order_detail_instruction_work_order_detail'); // Generic name for composite FK
        await queryRunner.dropTable('work_order_detail_instruction');
    }
}