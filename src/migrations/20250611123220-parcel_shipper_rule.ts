import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uparcel_shipper_rule20250611123220 implements MigrationInterface {
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
                name: 'parcel_shipper_rule',
                columns: [
                    {
                        name: 'rule_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'location_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611123220-parcel_shipper_rule.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611123220-parcel_shipper_rule.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('parcel_shipper_rule', 'FK_parcel_shipper_rule_warehouse');
        await queryRunner.dropForeignKey('parcel_shipper_rule', 'FK_parcel_shipper_rule_location_master');
        await queryRunner.dropTable('parcel_shipper_rule');
    }
}
