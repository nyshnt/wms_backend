import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udistribution_type20250612175657 implements MigrationInterface {
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
                name: 'distribution_type',
                columns: [
                    {
                        name: 'distribution_type',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'distribution_rule_set', // Column for foreign key
                        type: 'varchar', // Assuming varchar for rule_set
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'overage_rule_set', // Column for foreign key
                        type: 'varchar', // Assuming varchar for rule_set
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612175657-distribution_type.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612175657-distribution_type.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('distribution_type', 'FK_distribution_type_distribution_rule_set');
        await queryRunner.dropForeignKey('distribution_type', 'FK_distribution_type_overage_rule_set');
        await queryRunner.dropTable('distribution_type');
    }
}