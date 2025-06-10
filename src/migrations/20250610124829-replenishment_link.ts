import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureplenishment_link20250610124829 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'replenishment_link',
                columns: [
                    {
                        name: 'replenishment_reference',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'work_reference',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'replenishment_link',
            new TableForeignKey({
                columnNames: ['work_reference'],
                referencedColumnNames: ['work_reference'],
                referencedTableName: 'pick_work_header',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('replenishment_link', 'FK_replenishment_link_work_reference');
        await queryRunner.dropTable('replenishment_link');
    }
}
