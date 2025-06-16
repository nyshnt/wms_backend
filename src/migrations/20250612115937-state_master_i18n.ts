import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ustate_master_i18n20250612115937 implements MigrationInterface {
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
                name: 'State_Master_I18N',
                columns: [
                    {
                        name: 'country_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'state_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612115937-state_master_i18n.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('State_Master_I18N', 'FK_State_Master_I18N_country_name');
        await queryRunner.dropTable('State_Master_I18N');
    }
}
