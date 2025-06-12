import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureturn_header20250612173119 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'return_header',
                columns: [
                    {
                        name: 'rma_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'customer_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'return_source_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'carrier_code',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'return_header',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FK
            })
        );

        await queryRunner.createForeignKey(
            'return_header',
            new TableForeignKey({
                columnNames: ['customer_number'],
                referencedColumnNames: ['customer_number'],
                referencedTableName: 'customer_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'return_header',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'return_header',
            new TableForeignKey({
                columnNames: ['carrier_code'],
                referencedColumnNames: ['carrier_code'],
                referencedTableName: 'carrier_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_warehouse_id');
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_customer_number');
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_client_id');
        await queryRunner.dropForeignKey('return_header', 'FK_return_header_carrier_code');
        await queryRunner.dropTable('return_header');
    }
}