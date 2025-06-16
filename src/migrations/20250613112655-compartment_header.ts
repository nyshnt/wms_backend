import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucompartment_header20250613112655 implements MigrationInterface {
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
                name: 'compartment_header',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'work_order_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'work_order_revision',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112655-compartment_header.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to WorkOrderHeader
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112655-compartment_header.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('compartment_header', 'FK_compartment_header_client_id');
        await queryRunner.dropForeignKey('compartment_header', 'FK_compartment_header_work_order_header'); // Generic name for composite FK
        await queryRunner.dropTable('compartment_header');
    }
}