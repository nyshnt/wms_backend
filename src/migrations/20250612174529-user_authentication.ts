import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uuser_authentication20250612174529 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKey(
            'user_authentication',
            new TableForeignKey({
                columnNames: ['locale_id'],
                referencedColumnNames: ['locale_id'],
                referencedTableName: 'locale_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'user_authentication',
            new TableForeignKey({
                columnNames: ['address_id'],
                referencedColumnNames: ['address_id'],
                referencedTableName: 'address_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'user_authentication',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'user_authentication',
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_authentication', // Self-referencing
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_locale_id');
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_address_id');
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_client_id');
        await queryRunner.dropForeignKey('user_authentication', 'FK_user_authentication_modification_user_id');
        await queryRunner.dropTable('user_authentication');
    }
}