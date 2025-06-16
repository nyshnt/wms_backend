import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_instance_action20250613110356 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
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
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110356-service_instance_action.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to ServiceAction
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110356-service_instance_action.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110356-service_instance_action.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110356-service_instance_action.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110356-service_instance_action.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110356-service_instance_action.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110356-service_instance_action.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
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