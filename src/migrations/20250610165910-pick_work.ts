import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_work20250610165910 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_work',
                columns: [
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'schedule_batch_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('pick_work', [
            new TableForeignKey({
                columnNames: ['part_number'],
                referencedColumnNames: ['part_number'],
                referencedTableName: 'part_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['part_client_id'],
                referencedColumnNames: ['part_client_id'],
                referencedTableName: 'part_master',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_work', 'FK_pick_work_part_number');
        await queryRunner.dropForeignKey('pick_work', 'FK_pick_work_part_client_id');
        await queryRunner.dropTable('pick_work');
    }
}
