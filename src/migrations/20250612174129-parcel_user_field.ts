import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uparcel_user_field20250612174129 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.createForeignKey(
            'parcel_user_field',
            new TableForeignKey({
                columnNames: ['client_id', 'customer_number'],
                referencedColumnNames: ['client_id', 'customer_number'], // Assuming these form the composite primary key of customer_master
                referencedTableName: 'customer_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'parcel_user_field',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'parcel_user_field',
            new TableForeignKey({
                columnNames: ['modification_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('parcel_user_field', 'FK_parcel_user_field_customer_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('parcel_user_field', 'FK_parcel_user_field_insert_user_id');
        await queryRunner.dropForeignKey('parcel_user_field', 'FK_parcel_user_field_modification_user_id');
        await queryRunner.dropTable('parcel_user_field');
    }
}