import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uunit_of_measure_material20250612115745 implements MigrationInterface {
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
                name: 'Unit_Of_Measure_Material',
                columns: [
                    {
                        name: 'uom_category_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'conversion_factor_numerator',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'conversion_factor_denominator',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'display_precision',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'host_uom_code',
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
      console.log('Note: Foreign keys were not created for 20250612115745-unit_of_measure_material.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Unit_Of_Measure_Material', 'FK_Unit_Of_Measure_Material_uom_category_id');
        await queryRunner.dropTable('Unit_Of_Measure_Material');
    }
}
