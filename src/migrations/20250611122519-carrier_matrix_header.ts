import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucarrier_matrix_header20250611122519 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'carrier_matrix_header',
                columns: [
                    {
                        name: 'carrier_matrix_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar'
                    },
                    {
                        name: 'sequence_number',
                        type: 'int'
                    },
                    {
                        name: 'carrier_code',
                        type: 'varchar'
                    },
                    {
                        name: 'service_level',
                        type: 'varchar'
                    },
                    {
                        name: 'carrier_group',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('carrier_matrix_header',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('carrier_matrix_header', 'FK_carrier_matrix_header_warehouse');
        await queryRunner.dropTable('carrier_matrix_header');
    }
}
