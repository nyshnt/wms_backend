import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uinventory_status_role20250612183309 implements MigrationInterface {
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
                name: 'inventory_status_role',
                columns: [
                    {
                        name: 'inventory_status_role_id',
                        type: 'varchar',
                        isPrimary: true
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
                        name: 'role_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'from_inventory_status', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'to_inventory_status', // Column for foreign key
                        type: 'varchar',
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183309-inventory_status_role.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183309-inventory_status_role.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183309-inventory_status_role.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183309-inventory_status_role.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612183309-inventory_status_role.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_role_id');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_from_inventory_status');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_to_inventory_status');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_insert_user_id');
        await queryRunner.dropForeignKey('inventory_status_role', 'FK_inventory_status_role_modification_user_id');
        await queryRunner.dropTable('inventory_status_role');
    }
}