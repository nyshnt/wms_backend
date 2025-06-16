import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwork_order_header_note20250612163739 implements MigrationInterface {
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
                name: 'work_order_header_note',
                columns: [
                    {
                        name: 'work_order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_order_revision',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'note_line_number',
                        type: 'int',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to WorkOrderHeader
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612163739-work_order_header_note.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612163739-work_order_header_note.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612163739-work_order_header_note.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('work_order_header_note', 'FK_work_order_header_note_work_order_header'); // Generic name for composite FK
        await queryRunner.dropForeignKey('work_order_header_note', 'FK_work_order_header_note_warehouse_id');
        await queryRunner.dropForeignKey('work_order_header_note', 'FK_work_order_header_note_client_id');
        await queryRunner.dropTable('work_order_header_note');
    }
}