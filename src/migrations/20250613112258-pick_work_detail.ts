import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_work_detail20250613112258 implements MigrationInterface {
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
                name: 'pick_work_detail',
                columns: [
                    {
                        name: 'work_reference_detail_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'combination_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
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
                        name: 'work_order_number', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'work_order_revision', // Column for foreign key (composite)
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'work_order_line_number', // Column for foreign key (composite)
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'inventory_detail_number', // Column for foreign key
                        type: 'varchar', // Assuming varchar for inventory_detail_number
                        isNullable: true
                    },
                    {
                        name: 'shipment_line_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for shipment_line_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112258-pick_work_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112258-pick_work_detail.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to WorkOrderDetail
        // Note: This foreign key does not include 'segment_number' from WorkOrderDetail's primary key.
        // Ensure this aligns with your schema's integrity requirements.
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112258-pick_work_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112258-pick_work_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613112258-pick_work_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_warehouse_id');
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_client_id');
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_work_order_detail'); // Generic name for composite FK
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_inventory_detail_number');
        await queryRunner.dropForeignKey('pick_work_detail', 'FK_pick_work_detail_shipment_line_id');
        await queryRunner.dropTable('pick_work_detail');
    }
}