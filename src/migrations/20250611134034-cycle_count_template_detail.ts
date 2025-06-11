import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ucycle_count_template_detail20250611134034 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cycle_count_template_detail',
                columns: [
                    {
                        name: 'cycle_count_template_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'value',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('cycle_count_template_detail',
            new TableForeignKey({
                columnNames: ['cycle_count_template_id'],
                referencedColumnNames: ['cycle_count_template_id'],
                referencedTableName: 'cycle_count_template_header',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cycle_count_template_detail', 'FK_cycle_count_template_detail_cycle_count_template_id');
        await queryRunner.dropTable('cycle_count_template_detail');
    }
}
