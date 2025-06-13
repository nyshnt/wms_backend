import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_instance_action20250613110356 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'serv_ins_action',
                columns: [
                    {
                        name: 'serv_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'serv_ins_id',
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
                        name: 'frm_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'gui_frm_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'cnfrm_val_var_nam',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'u_version',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'ins_dt',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'last_upd_dt',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'ins_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'last_upd_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'hidcod',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'hidpt',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'reacod',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'srtseq',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'moddte',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'mod_usr_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'usr_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for user_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'hidnum', // Column for foreign key
                        type: 'varchar', // Assuming varchar for hold_number
                        isNullable: true
                    },
                    {
                        name: 'cnfrm_serv_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for confirm_service_id
                        isNullable: true
                    },
                    {
                        name: 'wh_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for warehouse_id
                        isNullable: true
                    },
                    {
                        name: 'ship_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on ShipmentHeader.shipment_id type
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to ServiceInstance
        await queryRunner.createForeignKey(
            'serv_ins_action',
            new TableForeignKey({
                columnNames: ['serv_id', 'serv_ins_id'],
                referencedColumnNames: ['service_id', 'service_instance_id'],
                referencedTableName: 'service_instance',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        // Composite foreign key to ServiceAction
        await queryRunner.createForeignKey(
            'serv_ins_action',
            new TableForeignKey({
                columnNames: ['serv_action_typ', 'serv_action_cod', 'segnum'],
                referencedColumnNames: ['service_action_type', 'service_action_code', 'segment_number'],
                referencedTableName: 'service_action',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'serv_ins_action',
            new TableForeignKey({
                columnNames: ['usr_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'serv_ins_action',
            new TableForeignKey({
                columnNames: ['hidnum'],
                referencedColumnNames: ['hold_number'],
                referencedTableName: 'hold_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'serv_ins_action',
            new TableForeignKey({
                columnNames: ['cnfrm_serv_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_service',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'serv_ins_action',
            new TableForeignKey({
                columnNames: ['wh_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'serv_ins_action',
            new TableForeignKey({
                columnNames: ['ship_id'],
                referencedColumnNames: ['shipment_id'],
                referencedTableName: 'shipment_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serv_ins_action', 'FK_serv_ins_action_service_instance'); // Generic name for composite FK
        await queryRunner.dropForeignKey('serv_ins_action', 'FK_serv_ins_action_service_action'); // Generic name for composite FK
        await queryRunner.dropForeignKey('serv_ins_action', 'FK_serv_ins_action_usr_id');
        await queryRunner.dropForeignKey('serv_ins_action', 'FK_serv_ins_action_hidnum');
        await queryRunner.dropForeignKey('serv_ins_action', 'FK_serv_ins_action_cnfrm_serv_id');
        await queryRunner.dropForeignKey('serv_ins_action', 'FK_serv_ins_action_wh_id');
        await queryRunner.dropForeignKey('serv_ins_action', 'FK_serv_ins_action_ship_id');
        await queryRunner.dropTable('serv_ins_action');
    }
}