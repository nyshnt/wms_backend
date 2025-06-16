import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udocument_label_format20250611102010 implements MigrationInterface {
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
                name: 'doc_lblfmt',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'label_format',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611102010-document_label_format.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611102010-document_label_format.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('doc_lblfmt', 'FK_doc_lblfmt_document_type');
        await queryRunner.dropForeignKey('doc_lblfmt', 'FK_doc_lblfmt_label_format');
        await queryRunner.dropTable('doc_lblfmt');
    }
}
