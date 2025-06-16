import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uunit_of_measure_definition20250612115450 implements MigrationInterface {
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
                name: 'Unit_Of_Measure_Definition',
                columns: [
                    {
                        name: 'master_uom_system',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'master_uom_category_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612115450-unit_of_measure_definition.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Unit_Of_Measure_Definition', 'FK_Unit_Of_Measure_Definition_master_uom_category_id');
        await queryRunner.dropTable('Unit_Of_Measure_Definition');
    }
}
