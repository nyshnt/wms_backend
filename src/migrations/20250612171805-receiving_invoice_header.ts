import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureceiving_invoice_header20250612171805 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'receiving_invoice_header',
                columns: [
                    {
                        name: 'tracking_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'invoice_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'receiving_invoice_header',
            new TableForeignKey({
                columnNames: ['tracking_number'],
                referencedColumnNames: ['tracking_number'],
                referencedTableName: 'receiving_truck_tracking',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'receiving_invoice_header',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'receiving_invoice_header',
            new TableForeignKey({
                columnNames: ['supplier_number'],
                referencedColumnNames: ['supplier_number'],
                referencedTableName: 'supplier_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'receiving_invoice_header',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_tracking_number');
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_client_id');
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_supplier_number');
        await queryRunner.dropForeignKey('receiving_invoice_header', 'FK_receiving_invoice_header_warehouse_id');
        await queryRunner.dropTable('receiving_invoice_header');
    }
}