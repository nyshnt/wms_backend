import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarea_master_receiving_wo20250612183606 implements MigrationInterface {
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
                name: 'area_master_receiving_wo',
                columns: [
                    {
                        name: 'area_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'receive_wo_non_fifo_lifo_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'default_receive_inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183606-area_master_receiving_wo.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183606-area_master_receiving_wo.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('area_master_receiving_wo', 'FK_area_master_receiving_wo_warehouse_id');
        await queryRunner.dropForeignKey('area_master_receiving_wo', 'FK_area_master_receiving_wo_default_receive_inventory_status');
        await queryRunner.dropTable('area_master_receiving_wo');
    }
}