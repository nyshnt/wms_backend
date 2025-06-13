import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Unote_reference20250613110742 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'note_reference',
                columns: [
                    {
                        name: 'reference_note_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'reference_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'reference_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'note_id', // Column for foreign key
                        type: 'uuid', // Assuming uuid based on NoteDetail.note_id type
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'note_reference',
            new TableForeignKey({
                columnNames: ['note_id'],
                referencedColumnNames: ['note_id'],
                referencedTableName: 'note_detail',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('note_reference', 'FK_note_reference_note_id');
        await queryRunner.dropTable('note_reference');
    }
}