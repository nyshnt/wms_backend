import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ustorage_zone_configuration_detail20250612182655 implements MigrationInterface {
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
                name: 'storage_zone_configuration_detail',
                columns: [
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'insertion_user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'storage_zone_configuration_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for storage_zone_configuration_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612182655-storage_zone_configuration_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('storage_zone_configuration_detail', 'FK_storage_zone_configuration_detail_storage_zone_configuration_id');
        await queryRunner.dropTable('storage_zone_configuration_detail');
    }
}