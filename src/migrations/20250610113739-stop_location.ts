import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ustop_location20250610113739 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
        // Enable UUID extension for PostgreSQL
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'stop_location',
                columns: [
                    {
                        name: 'stop_id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'carrier_move_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                ],
                indices: [
                    {
                        name: 'IDX_stop_location_stop_id',
                        columnNames: ['stop_id'],
                        isUnique: true,
                    },
                ],
            }),
            true,
        );

        // Check if carrier_move table exists before creating foreign key
        const carrierMoveTableExists = await queryRunner.hasTable('carrier_move');
        if (carrierMoveTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610113739-stop_location.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for carrier_move_id as the carrier_move table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the table first to check what foreign keys exist
        const table = await queryRunner.getTable('stop_location');
        
        // Drop carrier_move foreign key if it exists
        const carrierMoveForeignKey = table?.foreignKeys.find(fk => 
            fk.columnNames.indexOf('carrier_move_id') !== -1
        );
        if (carrierMoveForeignKey) {
            await queryRunner.dropForeignKey('stop_location', carrierMoveForeignKey);
        }

        await queryRunner.dropTable('stop_location');
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
    }
}
