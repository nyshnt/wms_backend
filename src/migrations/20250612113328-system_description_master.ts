import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usystem_description_master20250612113328 implements MigrationInterface {
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
                name: 'System_Description_Master',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'mls_text',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'short_description',
                        type: 'varchar',
                        isNullable: true
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
      console.log('Note: Foreign keys were not created for 20250612113328-system_description_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('System_Description_Master', 'FK_System_Description_Master_column_name_column_value_locale_id');
        await queryRunner.dropTable('System_Description_Master');
    }
}
