import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ucycle_count_type20250611140122 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cycle_count_type',
                columns: [
                    {
                        name: 'count_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'operation_code',
                        type: 'varchar'
                    },
                    {
                        name: 'detail_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cycle_count_type');
    }
}
