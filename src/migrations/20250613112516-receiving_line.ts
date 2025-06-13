import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureceiving_line20250613112516 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'receiving_line',
                columns: [
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        isPrimary: true
                    },
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
                        name: 'invoice_line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'invoice_subline_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'origin_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'consignment_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'inventory_attribute_string_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_string_10',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_integer_1',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_integer_5',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'integer_attribute_float_1',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_float_2',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_float_3',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_date_1',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'inventory_attribute_date_2',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'customs_consignment_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on CustomsConsignment.customs_consignment_id type
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'shipment_line_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar based on ShipmentLine.shipment_line_id type
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'receiving_line',
            new TableForeignKey({
                columnNames: ['customs_consignment_id'],
                referencedColumnNames: ['customs_consignment_id'],
                referencedTableName: 'customs_consignment',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'receiving_line',
            new TableForeignKey({
                columnNames: ['shipment_line_id'],
                referencedColumnNames: ['shipment_line_id'],
                referencedTableName: 'shipment_line',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('receiving_line', 'FK_receiving_line_customs_consignment_id');
        await queryRunner.dropForeignKey('receiving_line', 'FK_receiving_line_shipment_line_id');
        await queryRunner.dropTable('receiving_line');
    }
}