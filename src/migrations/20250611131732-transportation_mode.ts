import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Utransportation_mode20250611131732 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'transportation_mode',
                columns: [
                    {
                        name: 'transportation_mode',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'small_package_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'direct_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'pallet_control_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'version_number',
                        type: 'varchar'
                    },
                    {
                        name: 'insertion_date',
                        type: 'timestamp'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transportation_mode');
    }
}
