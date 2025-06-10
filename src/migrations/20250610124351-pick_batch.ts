import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_batch20250610124351 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_batch',
                columns: [
                    {
                        name: 'schedule_batch_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pick_batch');
    }
}
