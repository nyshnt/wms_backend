import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucycle_count_work20250612171519 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cycle_count_work',
                columns: [
                    {
                        name: 'count_batch_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'inventory_value_1',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'stock_location', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'count_type', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'part_client_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'cycle_count_work',
            new TableForeignKey({
                columnNames: ['count_batch_number'],
                referencedColumnNames: ['count_batch_number'], // Assuming count_batch_number is unique/primary in cycle_count_header
                referencedTableName: 'cycle_count_header',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FK
            })
        );

        await queryRunner.createForeignKey(
            'cycle_count_work',
            new TableForeignKey({
                columnNames: ['stock_location'],
                referencedColumnNames: ['storage_location'],
                referencedTableName: 'location_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cycle_count_work',
            new TableForeignKey({
                columnNames: ['count_type'],
                referencedColumnNames: ['count_type'],
                referencedTableName: 'cycle_count_type',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cycle_count_work',
            new TableForeignKey({
                columnNames: ['part_number'],
                referencedColumnNames: ['part_number'],
                referencedTableName: 'part_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'cycle_count_work',
            new TableForeignKey({
                columnNames: ['part_client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_count_batch_number');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_stock_location');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_count_type');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_part_number');
        await queryRunner.dropForeignKey('cycle_count_work', 'FK_cycle_count_work_part_client_id');
        await queryRunner.dropTable('cycle_count_work');
    }
}