import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ushipment_line20250613110032 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shipment_line',
                columns: [
                    {
                        name: 'shipment_line_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'shipment_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'order_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'order_line_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'order_subline_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'shipment_line',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'shipment_line',
            new TableForeignKey({
                columnNames: ['order_number'],
                referencedColumnNames: ['order_number'],
                referencedTableName: 'order_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Composite foreign key to OrderLine
        await queryRunner.createForeignKey(
            'shipment_line',
            new TableForeignKey({
                columnNames: ['order_line_number', 'order_subline_number'],
                referencedColumnNames: ['order_line_number', 'order_subline_number'], // Assuming these form the composite primary key of order_line
                referencedTableName: 'order_line',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('shipment_line', 'FK_shipment_line_client_id');
        await queryRunner.dropForeignKey('shipment_line', 'FK_shipment_line_order_number');
        await queryRunner.dropForeignKey('shipment_line', 'FK_shipment_line_order_line'); // Generic name for composite FK
        await queryRunner.dropTable('shipment_line');
    }
}