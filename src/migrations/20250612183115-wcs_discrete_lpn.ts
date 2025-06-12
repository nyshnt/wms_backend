import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwcs_discrete_lpn20250612183115 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wcs_discrete_lpn',
                columns: [
                    {
                        name: 'lpn_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_number', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'discrete_type',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'header_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'wcs_discrete_lpn',
            new TableForeignKey({
                columnNames: ['load_number'],
                referencedColumnNames: ['load_number'],
                referencedTableName: 'load_master',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'wcs_discrete_lpn',
            new TableForeignKey({
                columnNames: ['header_id'],
                referencedColumnNames: ['header_id'],
                referencedTableName: 'wcs_discrete_header',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_discrete_lpn', 'FK_wcs_discrete_lpn_load_number');
        await queryRunner.dropForeignKey('wcs_discrete_lpn', 'FK_wcs_discrete_lpn_header_id');
        await queryRunner.dropTable('wcs_discrete_lpn');
    }
}