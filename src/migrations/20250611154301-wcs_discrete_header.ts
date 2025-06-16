import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwcs_discrete_header20250611154301 implements MigrationInterface {
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
                name: 'wcs_discrete_header',
                columns: [
                    {
                        name: 'header_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_date',
                        type: 'timestamp',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611154301-wcs_discrete_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_discrete_header', 'FK_wcs_discrete_header_wcs_id');
        await queryRunner.dropForeignKey('wcs_discrete_header', 'FK_wcs_discrete_header_warehouse_id');
        await queryRunner.dropTable('wcs_discrete_header');
    }
}
