import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uconfirm_inventory_service20250613110542 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cnfrm_inv_serv',
                columns: [
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_ID',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'exitpoint_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'exitpoint',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'sort_sequence',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'compound_user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'compound_figure',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'compound_date',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'service_result',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'invoice_line_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'invoice_subline_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'unit_quantity',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'alternate_identifier',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'service_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'supplier_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_client_id', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
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
                    },
                    {
                        name: 'shipment_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on ShipmentHeader.shipment_id type
                        isNullable: true
                    },
                    {
                        name: 'user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'service_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['supplier_number'],
                referencedColumnNames: ['supplier_number'],
                referencedTableName: 'supplier_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['inventory_status'],
                referencedColumnNames: ['inventory_status'],
                referencedTableName: 'inventory_status',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Composite foreign key to PartMaster
        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['part_number', 'part_client_id'],
                referencedColumnNames: ['part_number', 'part_client_id'], // Assuming these form the composite primary key of part_master
                referencedTableName: 'part_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['order_number'],
                referencedColumnNames: ['order_number'],
                referencedTableName: 'order_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Composite foreign key to OrderLine
        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['order_line_number', 'order_subline_number'],
                referencedColumnNames: ['order_line_number', 'order_subline_number'], // Assuming these form the composite primary key of order_line
                referencedTableName: 'order_line',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['shipment_id'],
                referencedColumnNames: ['shipment_id'],
                referencedTableName: 'shipment_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cnfrm_inv_serv',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_warehouse_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_service_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_supplier_number');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_client_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_inventory_status');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_order_number');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_order_line'); // Generic name for composite FK
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_shipment_id');
        await queryRunner.dropForeignKey('cnfrm_inv_serv', 'FK_cnfrm_inv_serv_user_id');
        await queryRunner.dropTable('cnfrm_inv_serv');
    }
}