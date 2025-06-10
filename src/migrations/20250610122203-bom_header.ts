import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ubom_header20250610122203 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bom_header',
                columns: [
                    {
                        name: 'bom_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exclusion_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'production_line',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bom_header');
    }
}
