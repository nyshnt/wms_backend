import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucurrency_conversion_rate20250612120324 implements MigrationInterface {
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
                name: 'Currency_Conversion_Rate',
                columns: [
                    {
                        name: 'currency_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'effective_date',
                        type: 'date',
                        isPrimary: true
                    },
                    {
                        name: 'conversion_rate',
                        type: 'decimal',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612120324-currency_conversion_rate.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Currency_Conversion_Rate', 'FK_Currency_Conversion_Rate_currency_code');
        await queryRunner.dropTable('Currency_Conversion_Rate');
    }
}
