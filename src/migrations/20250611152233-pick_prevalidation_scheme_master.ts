import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_prevalidation_scheme_master20250611152233 implements MigrationInterface {
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
                name: 'pick_prevalidation_scheme_master',
                columns: [
                    {
                        name: 'scheme_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611152233-pick_prevalidation_scheme_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611152233-pick_prevalidation_scheme_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_prevalidation_scheme_master', 'FK_pick_prevalidation_scheme_master_insert_user_id');
        await queryRunner.dropForeignKey('pick_prevalidation_scheme_master', 'FK_pick_prevalidation_scheme_master_last_update_user_id');
        await queryRunner.dropTable('pick_prevalidation_scheme_master');
    }
}
