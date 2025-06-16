import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucity_postal_state_i8n20250612115018 implements MigrationInterface {
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
                name: 'City_Postal_State_I18N',
                columns: [
                    {
                        name: 'country_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'state_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'postal_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_level',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'latitude',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'longitude',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'invalid_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'invalid_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'gmt_offset',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'dst_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'group_name',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612115018-city_postal_state_i8n.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('City_Postal_State_I18N', 'FK_City_Postal_State_I18N_country_name');
        await queryRunner.dropForeignKey('City_Postal_State_I18N', 'FK_City_Postal_State_I18N_state_code');
        await queryRunner.dropTable('City_Postal_State_I18N');
    }
}
