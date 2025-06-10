import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_master_inventory20250610180519 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sery_m_inv',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'service_type',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'activity_code',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sery_m_inv');
    }
}
