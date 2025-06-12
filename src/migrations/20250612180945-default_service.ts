import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Udefault_service20250612180945 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'def_serv',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'carrier_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'inventory_status',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'inventory_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'customer_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'order_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'order_line_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'order_subline_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'service_level',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'customer_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'destination_area',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'trailer_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'vehicle_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'rate_service_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'stop_activity_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'common_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'usrid',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'destination_location',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE as client_id is not nullable here
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['part_number', 'part_client_id'],
                referencedColumnNames: ['part_number', 'part_client_id'], // Assuming these form the composite primary key of part_master
                referencedTableName: 'part_master',
                onDelete: 'CASCADE' // Assuming CASCADE as parts are not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['inventory_status'],
                referencedColumnNames: ['inventory_status'],
                referencedTableName: 'inventory_status',
                onDelete: 'CASCADE' // Assuming CASCADE as inventory_status is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['supplier_number'],
                referencedColumnNames: ['supplier_number'],
                referencedTableName: 'supplier_master',
                onDelete: 'CASCADE' // Assuming CASCADE as supplier_number is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['customer_number'],
                referencedColumnNames: ['customer_number'],
                referencedTableName: 'customer_master',
                onDelete: 'CASCADE' // Assuming CASCADE as customer_number is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['service_rate_id'],
                referencedColumnNames: ['service_rate_id'],
                referencedTableName: 'service_rate_master',
                onDelete: 'CASCADE' // Assuming CASCADE as service_rate_id is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['order_number'],
                referencedColumnNames: ['order_number'],
                referencedTableName: 'order_header',
                onDelete: 'CASCADE' // Assuming CASCADE as order_number is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['order_line_number', 'order_subline_number'],
                referencedColumnNames: ['order_line_number', 'order_subline_number'], // Assuming these form the composite primary key of order_line
                referencedTableName: 'order_line',
                onDelete: 'CASCADE' // Assuming CASCADE as order_line_number/subline_number are not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['trailer_type'],
                referencedColumnNames: ['trailer_type'],
                referencedTableName: 'trailer_type',
                onDelete: 'CASCADE' // Assuming CASCADE as trailer_type is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['vehicle_type'],
                referencedColumnNames: ['vehicle_type'],
                referencedTableName: 'vehicle_type',
                onDelete: 'CASCADE' // Assuming CASCADE as vehicle_type is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['address_id'],
                referencedColumnNames: ['address_id'],
                referencedTableName: 'address_master',
                onDelete: 'CASCADE' // Assuming CASCADE as address_id is not nullable
            })
        );

        await queryRunner.createForeignKey(
            'def_serv',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE' // Assuming CASCADE as user_id is not nullable
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_client_id');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_inventory_status');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_supplier_number');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_customer_number');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_service_rate_id');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_order_number');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_order_line'); // Generic name for composite FK
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_trailer_type');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_vehicle_type');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_address_id');
        await queryRunner.dropForeignKey('def_serv', 'FK_def_serv_user_id');
        await queryRunner.dropTable('def_serv');
    }
}