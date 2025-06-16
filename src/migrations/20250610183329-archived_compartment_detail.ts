import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarchived_compartment_detail20250610183329 implements MigrationInterface {
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
                name: 'arc_cmpdtl',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'added_date',
                        type: 'date',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar'
                    },
                    {
                        name: 'revision_level',
                        type: 'varchar'
                    },
                    {
                        name: 'origin_code',
                        type: 'varchar'
                    },
                    {
                        name: 'sub_number',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_detail_number',
                        type: 'varchar'
                    },
                    {
                        name: 'inventory_status',
                        type: 'varchar'
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610183329-archived_compartment_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('arc_cmpdtl', 'FK_arc_cmpdtl_archived_compartment_header');
        await queryRunner.dropTable('arc_cmpdtl');
    }
}
