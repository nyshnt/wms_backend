import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urma_line_item20250612172407 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rma_line_item',
                columns: [
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'rma_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'rma_line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'rma_sub_line_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to RMAHeader
        await queryRunner.createForeignKey(
            'rma_line_item',
            new TableForeignKey({
                columnNames: ['client_id', 'supplier_number', 'rma_number', 'warehouse_id'],
                referencedColumnNames: ['client_id', 'supplier_number', 'rma_number', 'warehouse_id'], // Assuming these form the composite primary key of rma_header
                referencedTableName: 'rma_header',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rma_line_item', 'FK_rma_line_item_rma_header'); // Generic name for composite FK
        await queryRunner.dropTable('rma_line_item');
    }
}