import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucarrier_matrix_detail20250611122836 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'carrier_matrix_detail',
                columns: [
                    {
                        name: 'carrier_matrix_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('carrier_matrix_detail',
            new TableForeignKey({
                columnNames: ['carrier_matrix_id'],
                referencedColumnNames: ['carrier_matrix_id'],
                referencedTableName: 'carrier_matrix_header',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('carrier_matrix_detail', 'FK_carrier_matrix_detail_carrier_matrix_header');
        await queryRunner.dropTable('carrier_matrix_detail');
    }
}
