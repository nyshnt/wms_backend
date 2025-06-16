import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucarrier_matrix_detail20250611122836 implements MigrationInterface {
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
                name: 'carrier_matrix_detail',
                columns: [
                    {
                        name: 'carrier_matrix_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611122836-carrier_matrix_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('carrier_matrix_detail', 'FK_carrier_matrix_detail_carrier_matrix_header');
        await queryRunner.dropTable('carrier_matrix_detail');
    }
}
