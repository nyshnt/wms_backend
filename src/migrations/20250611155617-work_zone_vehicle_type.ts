import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwork_zone_vehicle_type20250611155617 implements MigrationInterface {
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
                name: 'work_zone_vehicle_type',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_zone_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'vehicle_type_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'max_devices',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'version_number',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611155617-work_zone_vehicle_type.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_warehouse_id');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_work_zone_code');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_vehicle_type_id');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_insert_user_id');
        await queryRunner.dropForeignKey('work_zone_vehicle_type', 'FK_work_zone_vehicle_type_last_update_user_id');
        await queryRunner.dropTable('work_zone_vehicle_type');
    }
}
