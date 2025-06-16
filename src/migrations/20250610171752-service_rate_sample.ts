import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_rate_sample20250610171752 implements MigrationInterface {
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
                name: 'serv_rate_smpl',
                columns: [
                    {
                        name: 'serv_rate_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'mingty',
                        type: 'int',
                    },
                    {
                        name: 'prob_qty',
                        type: 'int',
                    },
                    {
                        name: 'max_prob_qty',
                        type: 'int',
                    },
                    {
                        name: 'moddte',
                        type: 'timestamp',
                    },
                    {
                        name: 'mod_usr_id',
                        type: 'varchar',
                        length: '255',
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610171752-service_rate_sample.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serv_rate_smpl', 'FK_serv_rate_smpl_service_rate_id');
        await queryRunner.dropTable('serv_rate_smpl');
    }
}
