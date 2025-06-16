import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarchived_component_shipment20250610182835 implements MigrationInterface {
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
                name: 'arc_cmp_shipment',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'order_subline_number',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610182835-archived_component_shipment.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('arc_cmp_shipment', 'FK_arc_cmp_shipment_archived_compartment_header');
        await queryRunner.dropTable('arc_cmp_shipment');
    }
}
