import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_action20250610172145 implements MigrationInterface {
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610172145-service_action.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serv_action', 'FK_serv_action_service_master');
        await queryRunner.dropForeignKey('serv_action', 'FK_serv_action_report_configuration');
        await queryRunner.dropTable('serv_action');
    }
}
