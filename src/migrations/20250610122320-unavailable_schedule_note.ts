import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uunavailable_schedule_note20250610122320 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('unavailable_schedule_note');
        if (!tableExists) {
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

            const workOrderHeaderNoteTableExists = await queryRunner.hasTable('work_order_header_note');
            if (workOrderHeaderNoteTableExists) {
                await queryRunner.createForeignKey(
                    'unavailable_schedule_note',
                    new TableForeignKey({
                        columnNames: ['note_line_number'],
                        referencedColumnNames: ['note_line_number'],
                        referencedTableName: 'work_order_header_note',
                        onDelete: 'CASCADE',
                    }),
                );
            } else {
                console.log('Skipping foreign key creation for note_line_number as the work_order_header_note table does not exist yet.');
            }
        } else {
            console.log('Skipping table creation as the unavailable_schedule_note table already exists.');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('unavailable_schedule_note');
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey('unavailable_schedule_note', foreignKey);
            }
            await queryRunner.dropTable('unavailable_schedule_note');
        }
    }
}
