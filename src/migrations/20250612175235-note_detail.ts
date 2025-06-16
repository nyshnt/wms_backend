import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Unote_detail20250612175235 implements MigrationInterface {
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

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612175235-note_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612175235-note_detail.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612175235-note_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('note_detail', 'FK_note_detail_note_type_id');
        await queryRunner.dropForeignKey('note_detail', 'FK_note_detail_client_id');
        await queryRunner.dropForeignKey('note_detail', 'FK_note_detail_warehouse_id');
        await queryRunner.dropTable('note_detail');
    }
}