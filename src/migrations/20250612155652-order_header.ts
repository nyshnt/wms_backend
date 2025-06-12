import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uorder_header20250612155652 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order_header',
                columns: [
                    {
                        name: 'order_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id',
                        type: 'uuid',
                        isNullable: false // As per entity @Column, not @JoinColumn, so assuming not nullable from Column definition
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false // As per entity @Column
                    },
                    {
                        name: 'order_date',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'order_status',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'order_header',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE since client_id is not nullable in OrderHeader
            })
        );

        await queryRunner.createForeignKey(
            'order_header',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse_master',
                onDelete: 'CASCADE' // Assuming CASCADE since warehouse_id is not nullable in OrderHeader
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_header', 'FK_order_header_client_id');
        await queryRunner.dropForeignKey('order_header', 'FK_order_header_warehouse_id');
        await queryRunner.dropTable('order_header');
    }
}