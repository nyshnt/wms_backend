import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_template_header20250611133428 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cycle_count_template_header',
                columns: [
                    {
                        name: 'cycle_count_template_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'auto_generate_template_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cycle_count_template_header');
    }
}
