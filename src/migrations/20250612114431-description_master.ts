import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udescription_master20250612114431 implements MigrationInterface {
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
                name: 'description_master',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                    },
                    {
                        name: 'long_description',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'short_description',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612114431-description_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('description_master', 'FK_description_master_locale_id');
        await queryRunner.dropForeignKey('description_master', 'FK_description_master_warehouse_id');
        await queryRunner.dropTable('description_master');
    }
}
