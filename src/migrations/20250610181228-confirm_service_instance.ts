import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uconfirm_service_instance20250610181228 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cnfrm_serv_ins',
                columns: [
                    {
                        name: 'confirm_service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'service_instance_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar'
                    },
                    {
                        name: 'service_instance_type',
                        type: 'varchar'
                    },
                    {
                        name: 'confirm_service_instance',
                        type: 'varchar'
                    },
                    {
                        name: 'insertion_user_id',
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
                        name: 'last_update_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('cnfrm_serv_ins',
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_non_inventory_service',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cnfrm_serv_ins', 'FK_cnfrm_serv_ins_confirm_non_inventory_service');
        await queryRunner.dropTable('cnfrm_serv_ins');
    }
}
