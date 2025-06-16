import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ushipment_time_slot20250613110159 implements MigrationInterface {
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
                name: 'shipment_time_slot',
                columns: [
                    {
                        name: 'time_slot_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'shipment_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on ShipmentHeader.shipment_id type
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110159-shipment_time_slot.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('shipment_time_slot', 'FK_shipment_time_slot_shipment_id');
        await queryRunner.dropTable('shipment_time_slot');
    }
}