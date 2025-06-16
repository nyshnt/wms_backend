import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Unote_reference20250613110742 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250613110742-note_reference.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('note_reference', 'FK_note_reference_note_id');
        await queryRunner.dropTable('note_reference');
    }
}