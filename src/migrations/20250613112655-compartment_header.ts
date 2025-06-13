import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucompartment_header20250613112655 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'compartment_header',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'work_order_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'work_order_revision',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'compartment_header',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE as client_id is not nullable here
            })
        );

        // Composite foreign key to WorkOrderHeader
        await queryRunner.createForeignKey(
            'compartment_header',
            new TableForeignKey({
                columnNames: ['work_order_number', 'work_order_revision'],
                referencedColumnNames: ['work_order_number', 'work_order_revision'], // Assuming these form the composite primary key of work_order_header
                referencedTableName: 'work_order_header',
                onDelete: 'CASCADE' // Assuming CASCADE as work_order_number and work_order_revision are not nullable
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('compartment_header', 'FK_compartment_header_client_id');
        await queryRunner.dropForeignKey('compartment_header', 'FK_compartment_header_work_order_header'); // Generic name for composite FK
        await queryRunner.dropTable('compartment_header');
    }
}