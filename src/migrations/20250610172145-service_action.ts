import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_action20250610172145 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'serv_action',
                columns: [
                    {
                        name: 'serv_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'serv_action_typ',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'serv_action_cod',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'segnum',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'ems_evt_nam',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'rpt_id',
                        type: 'varchar'
                    },
                    {
                        name: 'srvivl',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'ins_dt',
                        type: 'timestamp'
                    },
                    {
                        name: 'ins_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'last_upd_dt',
                        type: 'timestamp'
                    },
                    {
                        name: 'last_upd_user_id',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('serv_action', [
            new TableForeignKey({
                columnNames: ['serv_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'service_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['rpt_id'],
                referencedColumnNames: ['report_id'],
                referencedTableName: 'report_configuration',
                onDelete: 'SET NULL'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serv_action', 'FK_serv_action_service_master');
        await queryRunner.dropForeignKey('serv_action', 'FK_serv_action_report_configuration');
        await queryRunner.dropTable('serv_action');
    }
}
