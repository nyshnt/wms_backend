import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uvoice_region_detail20250611151159 implements MigrationInterface {
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
                name: 'voice_region_detail',
                columns: [
                    {
                        name: 'region_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'voice_validation_function',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'value',
                        type: 'varchar',
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
                    },
                    {
                        name: 'voice_validation_function_ref',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id_ref',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151159-voice_region_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151159-voice_region_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151159-voice_region_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151159-voice_region_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151159-voice_region_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_region_number');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_voice_validation_function');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_warehouse_id');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_insert_user_id');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_last_update_user_id');
        await queryRunner.dropTable('voice_region_detail');
    }
}
