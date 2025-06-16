import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udevice_master_reader20250610164144 implements MigrationInterface {
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
                name: 'device_master_reader',
                columns: [
                    {
                        name: 'reader_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'device_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );

        const rfidReaderTableExists = await queryRunner.hasTable('rfid_reader');
        if (rfidReaderTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610164144-device_master_reader.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for reader_id as the rfid_reader table does not exist yet.');
        }

        const deviceMasterTableExists = await queryRunner.hasTable('device_master');
        if (deviceMasterTableExists) {
            console.log('Skipping foreign key creation for device_code as the device_master table does not have a unique constraint on device_code.');
        } else {
            console.log('Skipping foreign key creation for device_code as the device_master table does not exist yet.');
        }

        const warehouseTableExists = await queryRunner.hasTable('warehouse');
        if (warehouseTableExists) {
            // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610164144-device_master_reader.ts. You should create these foreign keys when making APIs.');
        } else {
            console.log('Skipping foreign key creation for warehouse_id as the warehouse table does not exist yet.');
        }
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('device_master_reader');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('device_master_reader', foreignKey);
            }
            await queryRunner.dropTable('device_master_reader');
        }
    }
}
