import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureason_code20250611123832 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'reason_code',
                columns: [
                    {
                        name: 'reason_code',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('reason_code');
    }
}
