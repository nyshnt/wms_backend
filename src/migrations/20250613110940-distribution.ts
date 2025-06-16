import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udistribution20250613110940 implements MigrationInterface {
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
                name: 'distribution',
                columns: [
                    {
                        name: 'distribution_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'stocking_customer',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'invoice_line_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'invoice_subline_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'distribution_type', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on DistributionType.distribution_type type
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110940-distribution.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110940-distribution.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110940-distribution.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('distribution', 'FK_distribution_warehouse_id');
        await queryRunner.dropForeignKey('distribution', 'FK_distribution_client_id');
        await queryRunner.dropForeignKey('distribution', 'FK_distribution_distribution_type');
        await queryRunner.dropTable('distribution');
    }
}