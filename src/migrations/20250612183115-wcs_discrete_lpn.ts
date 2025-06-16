import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwcs_discrete_lpn20250612183115 implements MigrationInterface {
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
                name: 'wcs_discrete_lpn',
                columns: [
                    {
                        name: 'lpn_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'discrete_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'header_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183115-wcs_discrete_lpn.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183115-wcs_discrete_lpn.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_discrete_lpn', 'FK_wcs_discrete_lpn_load_number');
        await queryRunner.dropForeignKey('wcs_discrete_lpn', 'FK_wcs_discrete_lpn_header_id');
        await queryRunner.dropTable('wcs_discrete_lpn');
    }
}