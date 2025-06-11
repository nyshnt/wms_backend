import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Urf_vendor_master20250611103341 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rf_vendor_master',
                columns: [
                    {
                        name: 'RF_vendor_name',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rf_vendor_master');
    }
}
