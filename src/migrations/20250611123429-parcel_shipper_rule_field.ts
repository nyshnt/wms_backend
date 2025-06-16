import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uparcel_shipper_rule_field20250611123429 implements MigrationInterface {
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
                name: 'parcel_shipper_rule_field',
                columns: [
                    {
                        name: 'rule_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611123429-parcel_shipper_rule_field.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('parcel_shipper_rule_field', 'FK_parcel_shipper_rule_field_parcel_shipper_rule');
        await queryRunner.dropTable('parcel_shipper_rule_field');
    }
}
