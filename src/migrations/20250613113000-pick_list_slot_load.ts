import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_list_slot_load20250613113000 implements MigrationInterface {
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
                name: 'Pick_List_Slot_Load',
                columns: [
                    {
                        name: 'load_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot_load_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'asset_slot_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613113000-pick_list_slot_load.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613113000-pick_list_slot_load.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Pick_List_Slot_Load', 'FK_Pick_List_Slot_Load_load_number');
        await queryRunner.dropForeignKey('Pick_List_Slot_Load', 'FK_Pick_List_Slot_Load_asset_slot_id');
        await queryRunner.dropTable('Pick_List_Slot_Load');
    }
}
