import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upick_batch20250610124351 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('pick_batch');
        if (!tableExists) {
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
        } else {
            console.log('Skipping table creation as the pick_batch table already exists.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('pick_batch');
        if (table) {
            await queryRunner.dropTable('pick_batch');
        }
    }
}
