import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uaddress_master_i18n20250613104352 implements MigrationInterface {
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
                name: 'address_master_i18n',
                columns: [
                    {
                        name: 'locale_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'host_external_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_line_1',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_line_2',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_line_3',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'city', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'state_code', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'postal_code', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'country_name', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613104352-address_master_i18n.ts. You should create these foreign keys when making APIs.');

        // Note: The following foreign keys reference single columns in 'city_postal_state_i18n'.
        // If 'city_postal_state_i18n' has a composite primary key, ensure these columns are unique
        // or consider a composite foreign key if the relationship involves the full primary key.
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613104352-address_master_i18n.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613104352-address_master_i18n.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613104352-address_master_i18n.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613104352-address_master_i18n.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_locale_id');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_city');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_state_code');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_postal_code');
        await queryRunner.dropForeignKey('address_master_i18n', 'FK_address_master_i18n_country_name');
        await queryRunner.dropTable('address_master_i18n');
    }
}