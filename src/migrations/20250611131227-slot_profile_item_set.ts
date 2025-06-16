import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uslot_profile_item_set20250611131227 implements MigrationInterface {
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
                name: 'slot_profile_item_set',
                columns: [
                    {
                        name: 'item_set',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'profile_name',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611131227-slot_profile_item_set.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611131227-slot_profile_item_set.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('slot_profile_item_set', 'FK_slot_profile_item_set_item_set');
        await queryRunner.dropForeignKey('slot_profile_item_set', 'FK_slot_profile_item_set_warehouse_id');
        await queryRunner.dropTable('slot_profile_item_set');
    }
}
