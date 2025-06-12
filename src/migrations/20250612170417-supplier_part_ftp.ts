import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Usupplier_part_ftp20250612170417 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'supplier_part_ftp',
                columns: [
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'FTP_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'asset_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to PartMaster
        await queryRunner.createForeignKey(
            'supplier_part_ftp',
            new TableForeignKey({
                columnNames: ['part_number', 'part_client_id'],
                referencedColumnNames: ['part_number', 'part_client_id'], // Assuming these form the composite primary key of part_master
                referencedTableName: 'part_master',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'supplier_part_ftp',
            new TableForeignKey({
                columnNames: ['supplier_number'],
                referencedColumnNames: ['supplier_number'],
                referencedTableName: 'supplier_part', // Assuming supplier_number is unique/primary in supplier_part
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'supplier_part_ftp',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'supplier_part_ftp',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('supplier_part_ftp', 'FK_supplier_part_ftp_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('supplier_part_ftp', 'FK_supplier_part_ftp_supplier_number');
        await queryRunner.dropForeignKey('supplier_part_ftp', 'FK_supplier_part_ftp_warehouse_id');
        await queryRunner.dropForeignKey('supplier_part_ftp', 'FK_supplier_part_ftp_client_id');
        await queryRunner.dropTable('supplier_part_ftp');
    }
}