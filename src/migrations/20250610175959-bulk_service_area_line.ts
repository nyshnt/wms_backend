import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ubulk_service_area_line20250610175959 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Bulb_serv_are_line',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'entity_relationship_diagram_line',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_unit_of_measure',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_code',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean'
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
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'shipment_address',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'shipment_indicator',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('Bulb_serv_are_line',
            new TableForeignKey({
                columnNames: ['default_service_code'],
                referencedColumnNames: ['default_service_code'],
                referencedTableName: 'default_service',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Bulb_serv_are_line', 'FK_bulb_serv_are_line_default_service');
        await queryRunner.dropTable('Bulb_serv_are_line');
    }
}
