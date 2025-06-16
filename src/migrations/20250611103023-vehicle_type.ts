import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uvehicle_type20250611103023 implements MigrationInterface {
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
                name: 'vehicle_type',
                columns: [
                    {
                        name: 'vehicle_type_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'vehicle_type',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'vehicle_type_name',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'vehicle_type_description',
                        type: 'text',
                        isNullable: true
                    },
                    {
                        name: 'voice_code',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'vehicle_load_limit',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicle_type');
    }
}
