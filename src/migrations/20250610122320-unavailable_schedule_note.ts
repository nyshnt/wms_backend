import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uunavailable_schedule_note20250610122320 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'unavailable_schedule_note',
                columns: [
                    {
                        name: 'unavailable_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'note_line_number',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'note_text',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'edited_flag',
                        type: 'boolean',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'unavailable_schedule_note',
            new TableForeignKey({
                columnNames: ['note_line_number'],
                referencedColumnNames: ['note_line_number'],
                referencedTableName: 'work_order_header_note',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('unavailable_schedule_note', 'FK_unavailable_schedule_note_note_line_number');
        await queryRunner.dropTable('unavailable_schedule_note');
    }
}
