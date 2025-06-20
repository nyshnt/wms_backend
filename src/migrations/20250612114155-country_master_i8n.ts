import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucountry_master_i8n20250612114155 implements MigrationInterface {
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
                name: 'Country_Master_I18N',
                columns: [
                    {
                        name: 'country_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'iso_2_country_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'iso_3_country_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'iso_country_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_format',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'domestic_id_access_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'international_access_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'country_phone_code',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'customs_country_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'zip_code_length',
                        type: 'int',
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
    } catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Country_Master_I18N');
    }
}
