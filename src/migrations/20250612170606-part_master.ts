import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upart_master20250612170606 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'part_master',
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
                        name: 'attribute_string_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'attribute_string_10',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'attribute_integer_1',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'attribute_integer_5',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'attribute_float_1',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'attribute_float_3',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'attribute_date_1',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'attribute_date_2',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'part_master_column_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'display_part_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'alternate_part_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'supplier_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
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

        await queryRunner.createForeignKey(
            'part_master',
            new TableForeignKey({
                columnNames: ['supplier_number'],
                referencedColumnNames: ['supplier_number'], // Assuming supplier_number is unique/primary in supplier_master
                referencedTableName: 'supplier_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'part_master',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'part_master',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('part_master', 'FK_part_master_supplier_number');
        await queryRunner.dropForeignKey('part_master', 'FK_part_master_warehouse_id');
        await queryRunner.dropForeignKey('part_master', 'FK_part_master_client_id');
        await queryRunner.dropTable('part_master');
    }
}