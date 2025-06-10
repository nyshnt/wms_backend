import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ulocation_type20250610115417 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'location_type',
                columns: [
                    {
                        name: 'location_type_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('location_type');
    }
}
