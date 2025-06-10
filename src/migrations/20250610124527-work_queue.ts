import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwork_queue20250610124527 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'work_queue',
                columns: [
                    {
                        name: 'registration_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'work_queue',
            new TableForeignKey({
                columnNames: ['work_reference'],
                referencedColumnNames: ['work_reference'],
                referencedTableName: 'pick_work_header',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('work_queue', 'FK_work_queue_work_reference');
        await queryRunner.dropTable('work_queue');
    }
}
