import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Utrailer_master20250610162241 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'trailer_master',
                columns: [
                    {
                        name: 'trailer_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('trailer_master');
    }
}
