import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_list_asset_slot20250613111342 implements MigrationInterface {
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
                name: 'pick_list_asset_slot',
                columns: [
                    {
                        name: 'slot_type_id',
                        type: 'uuid', // Assuming 'uuid' for PrimaryGeneratedColumn
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'asset_slot_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'slot_asset_type_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_type_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'asset_type_id_fk', // Column for foreign key (marked as redundant in entity)
                        type: 'varchar', // Assuming varchar for asset_type_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613111342-pick_list_asset_slot.ts. You should create these foreign keys when making APIs.');

        // This foreign key is marked as redundant in the entity definition.
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613111342-pick_list_asset_slot.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_asset_slot', 'FK_pick_list_asset_slot_slot_asset_type_id');
        await queryRunner.dropForeignKey('pick_list_asset_slot', 'FK_pick_list_asset_slot_asset_type_id_fk');
        await queryRunner.dropTable('pick_list_asset_slot');
    }
}