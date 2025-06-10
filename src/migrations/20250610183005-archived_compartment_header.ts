import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarchived_compartment_header20250610183005 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'archived_compartment_header',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'added_date',
                        type: 'date'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('archived_compartment_header');
    }
}
