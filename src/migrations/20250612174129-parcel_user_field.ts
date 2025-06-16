import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uparcel_user_field20250612174129 implements MigrationInterface {
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
                name: 'parcel_user_field',
                columns: [
                    {
                        name: 'parcel_user_field_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'customer_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'user_column_1',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'user_column_2',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'user_column_3',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'user_column_4',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to CustomerMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174129-parcel_user_field.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174129-parcel_user_field.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174129-parcel_user_field.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('parcel_user_field', 'FK_parcel_user_field_customer_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('parcel_user_field', 'FK_parcel_user_field_insert_user_id');
        await queryRunner.dropForeignKey('parcel_user_field', 'FK_parcel_user_field_modification_user_id');
        await queryRunner.dropTable('parcel_user_field');
    }
}