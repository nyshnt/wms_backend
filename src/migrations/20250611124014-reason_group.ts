import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureason_group20250611124014 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'reason_group',
                columns: [
                    {
                        name: 'reason_group',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('reason_group');
    }
}
