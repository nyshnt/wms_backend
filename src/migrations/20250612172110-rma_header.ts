import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urma_header20250612172110 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rma_header',
                columns: [
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
                        name: 'rma_number',
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
            'rma_header',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'rma_header',
            new TableForeignKey({
                columnNames: ['supplier_number'],
                referencedColumnNames: ['supplier_number'],
                referencedTableName: 'supplier_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'rma_header',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rma_header', 'FK_rma_header_client_id');
        await queryRunner.dropForeignKey('rma_header', 'FK_rma_header_supplier_number');
        await queryRunner.dropForeignKey('rma_header', 'FK_rma_header_warehouse_id');
        await queryRunner.dropTable('rma_header');
    }
}