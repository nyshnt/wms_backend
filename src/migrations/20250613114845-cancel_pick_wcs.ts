import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucancel_pick_wcs20250613114845 implements MigrationInterface {
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
                name: 'cancel_pick_wcs',
                columns: [
                    {
                        name: 'cancellation_group_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_cancel_pick_status',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'wcs_cancel_request_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'wcs_cancel_confirm_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'work_reference', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'work_reference_detail_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114845-cancel_pick_wcs.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613114845-cancel_pick_wcs.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cancel_pick_wcs', 'FK_cancel_pick_wcs_work_reference');
        await queryRunner.dropForeignKey('cancel_pick_wcs', 'FK_cancel_pick_wcs_work_reference_detail_id');
        await queryRunner.dropTable('cancel_pick_wcs');
    }
}