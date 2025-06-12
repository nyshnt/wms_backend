import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Unote_detail20250612175235 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'note_detail',
                columns: [
                    {
                        name: 'note_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'note_text',
                        type: 'text',
                        isNullable: false
                    },
                    {
                        name: 'note_type_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for note_type_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for client_id
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for warehouse_id
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'note_detail',
            new TableForeignKey({
                columnNames: ['note_type_id'],
                referencedColumnNames: ['note_type_id'],
                referencedTableName: 'note_type',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'note_detail',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'note_detail',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('note_detail', 'FK_note_detail_note_type_id');
        await queryRunner.dropForeignKey('note_detail', 'FK_note_detail_client_id');
        await queryRunner.dropForeignKey('note_detail', 'FK_note_detail_warehouse_id');
        await queryRunner.dropTable('note_detail');
    }
}