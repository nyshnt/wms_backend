import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uunit_of_measure_master_i18n20250613105418 implements MigrationInterface {
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
                name: 'unit_of_measure_master_i18n',
                columns: [
                    {
                        name: 'uom_category_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'uom_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'uom_symbol',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'master_uom_system_fk', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613105418-unit_of_measure_master_i18n.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613105418-unit_of_measure_master_i18n.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('unit_of_measure_master_i18n', 'FK_unit_of_measure_master_i18n_locale_id');
        await queryRunner.dropForeignKey('unit_of_measure_master_i18n', 'FK_unit_of_measure_master_i18n_master_uom_system_fk');
        await queryRunner.dropTable('unit_of_measure_master_i18n');
    }
}