import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureturn_detail20250612173413 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'return_detail',
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
                        name: 'sequence_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'line_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'expected_quantity',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'identified_quantity',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'receiving_key',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Composite foreign key to ReturnHeader
        await queryRunner.createForeignKey(
            'return_detail',
            new TableForeignKey({
                columnNames: ['rma_number', 'warehouse_id'],
                referencedColumnNames: ['rma_number', 'warehouse_id'], // Assuming these form the composite primary key of return_header
                referencedTableName: 'return_header',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'return_detail',
            new TableForeignKey({
                columnNames: ['part_number'],
                referencedColumnNames: ['part_number'],
                referencedTableName: 'part_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'return_detail',
            new TableForeignKey({
                columnNames: ['part_client_id'],
                referencedColumnNames: ['client_id'], // Referenced column is client_id in ClientMaster
                referencedTableName: 'client_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('return_detail', 'FK_return_detail_return_header'); // Generic name for composite FK
        await queryRunner.dropForeignKey('return_detail', 'FK_return_detail_part_number');
        await queryRunner.dropForeignKey('return_detail', 'FK_return_detail_part_client_id');
        await queryRunner.dropTable('return_detail');
    }
}