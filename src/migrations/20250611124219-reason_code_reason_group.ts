import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ureason_code_reason_group20250611124219 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'reason_code_reason_group',
                columns: [
                    {
                        name: 'reason_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'reason_group',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('reason_code_reason_group',
            new TableForeignKey({
                columnNames: ['reason_code'],
                referencedColumnNames: ['reason_code'],
                referencedTableName: 'reason_code',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('reason_code_reason_group',
            new TableForeignKey({
                columnNames: ['reason_group'],
                referencedColumnNames: ['reason_group'],
                referencedTableName: 'reason_group',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('reason_code_reason_group', 'FK_reason_code_reason_group_reason_code');
        await queryRunner.dropForeignKey('reason_code_reason_group', 'FK_reason_code_reason_group_reason_group');
        await queryRunner.dropTable('reason_code_reason_group');
    }
}
