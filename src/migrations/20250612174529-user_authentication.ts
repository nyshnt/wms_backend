import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uuser_authentication20250612174529 implements MigrationInterface {
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
                name: 'user_authentication',
                columns: [
                    {
                        name: 'user_id',
                        type: 'uuid', // Assuming 'uuid' for PrimaryGeneratedColumn
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'login_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'user_password',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'user_status',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'super_user_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'account_expiration_date',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'password_change_date',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'password_change_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'password_expiration_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'last_modified_date',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'last_login_date',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'last_logout_date',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'intruder_attempt_count',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'single_sign_on_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'external_auth_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'modification_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'pin_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'incentive_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'differential_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'unmeasured_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'payroll_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'auth_group_name_user',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'countback_enabled_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'adj_threshold_cost_user',
                        type: 'float',
                        isNullable: false
                    },
                    {
                        name: 'adj_threshold_unit_user',
                        type: 'float',
                        isNullable: false
                    },
                    {
                        name: 'group_name_user',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'locale_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'address_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'modification_user_id', // Column for foreign key (self-referencing)
                        type: 'uuid', // Assuming 'uuid' as it references user_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174529-user_authentication.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174529-user_authentication.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174529-user_authentication.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612174529-user_authentication.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_locale_id');
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_address_id');
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_client_id');
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_modification_user_id');
        await queryRunner.dropTable('user_authentication');
    }
}