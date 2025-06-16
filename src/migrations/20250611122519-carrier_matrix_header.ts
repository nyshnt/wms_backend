import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucarrier_matrix_header20250611122519 implements MigrationInterface {
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
                name: 'carrier_matrix_header',
                columns: [
                    {
                        name: 'carrier_matrix_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    },
                    {
                        name: 'carrier_code',
                        type: 'varchar'
                    },
                    {
                        name: 'service_level',
                        type: 'varchar'
                    },
                    {
                        name: 'carrier_group',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611122519-carrier_matrix_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('carrier_matrix_header', 'FK_carrier_matrix_header_warehouse');
        await queryRunner.dropTable('carrier_matrix_header');
    }
}
