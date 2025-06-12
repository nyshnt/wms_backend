import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_rate_multi20250612170930 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'serstate_mul',
                columns: [
                    {
                        name: 'service_rate_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_service_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'service_request_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'quantity_by_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'adhesion_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'modified_user_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'version_number',
                        type: 'varchar',
                        length: '255',
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
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'last_update_user',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false // As per entity @Column
                    },
                    {
                        name: 'invoice_line_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'invalid_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'inventory_assets',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'serstate_mul',
            new TableForeignKey({
                columnNames: ['service_rate_id'],
                referencedColumnNames: ['service_rate_id'],
                referencedTableName: 'service_rate_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FK
            })
        );

        await queryRunner.createForeignKey(
            'serstate_mul',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE as client_id is not nullable here
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serstate_mul', 'FK_serstate_mul_service_rate_id');
        await queryRunner.dropForeignKey('serstate_mul', 'FK_serstate_mul_client_id');
        await queryRunner.dropTable('serstate_mul');
    }
}