import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_master20250612155147 implements MigrationInterface {
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
                name: 'asset_master',
                columns: [
                    {
                        name: 'asset_id',
                        type: 'uuid', // Using 'uuid' for PrimaryGeneratedColumn('uuid')
                        isPrimary: true,
                        isGenerated: true, // Mark as generated
                        generationStrategy: 'uuid' // Specify UUID generation strategy
                    },
                    {
                        name: 'asset_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for client_id based on typical IDs
                        isNullable: true // Foreign key from ManyToOne is often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for warehouse_id
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612155147-asset_master.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612155147-asset_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_master', 'FK_asset_master_client_id');
        await queryRunner.dropForeignKey('asset_master', 'FK_asset_master_warehouse_id');
        await queryRunner.dropTable('asset_master');
    }
}