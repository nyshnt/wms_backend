import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_rate_master20250612182315 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'service_rate_master',
                columns: [
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'quantity_by_code',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'movement_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'category_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'order_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'service_level',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'service_enabled_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'load_level',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'category_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'destination_area',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'trailer_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'rate_service_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'stop_activity_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'common_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'version_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
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
                        name: 'inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'supplier_number', // Column for foreign key
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
                        name: 'confirm_service_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'vehicle_type', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_id', // Column for foreign key
                        type: 'varchar',
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
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Composite foreign key to PartMaster
        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['part_number', 'part_client_id'],
                referencedColumnNames: ['part_number', 'part_client_id'], // Assuming these form the composite primary key of part_master
                referencedTableName: 'part_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['inventory_status'],
                referencedColumnNames: ['inventory_status'],
                referencedTableName: 'inventory_status',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['supplier_number'],
                referencedColumnNames: ['supplier_number'],
                referencedTableName: 'supplier_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['order_number'],
                referencedColumnNames: ['order_number'],
                referencedTableName: 'order_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // Composite foreign key to OrderLine
        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['order_line_number', 'order_subline_number'],
                referencedColumnNames: ['order_line_number', 'order_subline_number'], // Assuming these form the composite primary key of order_line
                referencedTableName: 'order_line',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_service',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['vehicle_type'],
                referencedColumnNames: ['vehicle_type'],
                referencedTableName: 'vehicle_type',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['address_id'],
                referencedColumnNames: ['address_id'],
                referencedTableName: 'address_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'service_rate_master',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_client_id');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_inventory_status');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_supplier_number');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_order_number');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_order_line'); // Generic name for composite FK
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_confirm_service_id');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_vehicle_type');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_address_id');
        await queryRunner.dropForeignKey('service_rate_master', 'FK_service_rate_master_user_id');
        await queryRunner.dropTable('service_rate_master');
    }
}