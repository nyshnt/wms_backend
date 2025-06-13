import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uorder_line20250613112824 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order_line',
                columns: [
                    {
                        name: 'order_number',
                        type: 'varchar', // Based on referencedColumnName in OrderHeader
                        isPrimary: true
                    },
                    {
                        name: 'order_line_number',
                        type: 'uuid', // As per PrimaryGeneratedColumn('uuid') in entity
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'order_subline_number',
                        type: 'uuid', // As per PrimaryGeneratedColumn('uuid') in entity
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'distribution_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on Distribution.distribution_id type
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar based on Client.client_id type
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar based on Warehouse.warehouse_id type
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'order_line',
            new TableForeignKey({
                columnNames: ['order_number'],
                referencedColumnNames: ['order_number'],
                referencedTableName: 'order_header',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'order_line',
            new TableForeignKey({
                columnNames: ['distribution_id'],
                referencedColumnNames: ['distribution_id'],
                referencedTableName: 'distribution',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'order_line',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'order_line',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_order_number');
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_distribution_id');
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_client_id');
        await queryRunner.dropForeignKey('order_line', 'FK_order_line_warehouse_id');
        await queryRunner.dropTable('order_line');
    }
}