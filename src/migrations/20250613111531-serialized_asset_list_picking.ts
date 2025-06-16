import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Userialized_asset_list_picking20250613111531 implements MigrationInterface {
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
                name: 'serialized_asset_list_picking',
                columns: [
                    {
                        name: 'asset_id',
                        type: 'uuid', // Assuming 'uuid' for PrimaryGeneratedColumn
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'source_address_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'asset_status_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'asset_type_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_type_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613111531-serialized_asset_list_picking.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serialized_asset_list_picking', 'FK_serialized_asset_list_picking_asset_type_id');
        await queryRunner.dropTable('serialized_asset_list_picking');
    }
}