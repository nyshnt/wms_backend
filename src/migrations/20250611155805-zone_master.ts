import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uzone_master20250611155805 implements MigrationInterface {
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
                name: 'zone_master',
                columns: [
                    {
                        name: 'work_zone_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'max_devices',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'zone_description',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'creation_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611155805-zone_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('zone_master', 'FK_zone_master_warehouse_id');
        await queryRunner.dropTable('zone_master');
    }
}
