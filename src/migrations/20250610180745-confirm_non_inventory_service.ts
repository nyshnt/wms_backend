import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uconfirm_non_inventory_service20250610180745 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cnfrm_noninv_serv',
                columns: [
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'service_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sort_sequence',
                        type: 'varchar'
                    },
                    {
                        name: 'non_inventory_ID',
                        type: 'varchar'
                    },
                    {
                        name: 'non_inventory_type',
                        type: 'varchar'
                    },
                    {
                        name: 'trailer_type',
                        type: 'varchar'
                    },
                    {
                        name: 'vehicle_type',
                        type: 'varchar'
                    },
                    {
                        name: 'service_result',
                        type: 'varchar'
                    },
                    {
                        name: 'addition_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'compound_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'compound_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'order_number',
                        type: 'varchar'
                    },
                    {
                        name: 'order_line_number',
                        type: 'varchar'
                    },
                    {
                        name: 'order_subline_number',
                        type: 'varchar'
                    },
                    {
                        name: 'service_level',
                        type: 'varchar'
                    },
                    {
                        name: 'customer_type',
                        type: 'varchar'
                    },
                    {
                        name: 'destination_area',
                        type: 'varchar'
                    },
                    {
                        name: 'rate_service_name',
                        type: 'varchar'
                    },
                    {
                        name: 'address_id',
                        type: 'varchar'
                    },
                    {
                        name: 'stop_activity_type',
                        type: 'varchar'
                    },
                    {
                        name: 'common_code',
                        type: 'varchar'
                    },
                    {
                        name: 'version_number',
                        type: 'varchar'
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('cnfrm_noninv_serv', [
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'service_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['trailer_type'],
                referencedColumnNames: ['trailer_type'],
                referencedTableName: 'trailer_type',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['vehicle_type'],
                referencedColumnNames: ['vehicle_type'],
                referencedTableName: 'vehicle_type',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['order_number'],
                referencedColumnNames: ['order_number'],
                referencedTableName: 'order_header',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['order_line_number', 'order_subline_number'],
                referencedColumnNames: ['order_line_number', 'order_subline_number'],
                referencedTableName: 'order_line',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['address_id'],
                referencedColumnNames: ['address_id'],
                referencedTableName: 'address_master',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_warehouse');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_service_master');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_trailer_type');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_vehicle_type');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_user_master');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_order_header');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_order_line');
        await queryRunner.dropForeignKey('cnfrm_noninv_serv', 'FK_cnfrm_noninv_serv_address_master');
        await queryRunner.dropTable('cnfrm_noninv_serv');
    }
}
