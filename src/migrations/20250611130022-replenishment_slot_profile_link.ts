import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureplenishment_slot_profile_link20250611130022 implements MigrationInterface {
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
                name: 'replenishment_slot_profile_link',
                columns: [
                    {
                        name: 'replenishment_reference',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot_unit_of_measure',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'profile_name',
                        type: 'varchar'
                    },
                    {
                        name: 'picked_quantity',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611130022-replenishment_slot_profile_link.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611130022-replenishment_slot_profile_link.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('replenishment_slot_profile_link', 'FK_replenishment_slot_profile_link_replenishment_reference');
        await queryRunner.dropForeignKey('replenishment_slot_profile_link', 'FK_replenishment_slot_profile_link_profile_name');
        await queryRunner.dropTable('replenishment_slot_profile_link');
    }
}
