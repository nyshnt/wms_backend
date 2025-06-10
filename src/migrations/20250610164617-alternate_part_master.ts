import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ualternate_part_master20250610164617 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'alternate_part_master',
                columns: [
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'alternate_part_type',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'alternate_part_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('alternate_part_master', [
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
        await queryRunner.dropForeignKey('alternate_part_master', 'FK_alternate_part_master_part_number');
        await queryRunner.dropForeignKey('alternate_part_master', 'FK_alternate_part_master_part_client_id');
        await queryRunner.dropTable('alternate_part_master');
    }
}
