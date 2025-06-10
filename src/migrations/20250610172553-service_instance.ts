import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_instance20250610172553 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'service_instance',
                columns: [
                    {
                        name: 'service_instance_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'service_id',
                        type: 'varchar'
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_instance_type',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'stop_service_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_rate_id',
                        type: 'varchar'
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKeys('service_instance', [
            new TableForeignKey({
                columnNames: ['service_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'service_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['service_rate_id'],
                referencedColumnNames: ['service_rate_id'],
                referencedTableName: 'service_rate_master',
                onDelete: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['confirm_service_id'],
                referencedColumnNames: ['confirm_service_id'],
                referencedTableName: 'confirm_service',
                onDelete: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service_instance', 'FK_service_instance_service_master');
        await queryRunner.dropForeignKey('service_instance', 'FK_service_instance_service_rate_master');
        await queryRunner.dropForeignKey('service_instance', 'FK_service_instance_confirm_service');
        await queryRunner.dropTable('service_instance');
    }
}
