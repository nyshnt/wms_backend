import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udocument_type_level_label20250611151356 implements MigrationInterface {
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
                name: 'document_type_level_label',
                columns: [
                    {
                        name: 'document_type_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'column_value',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'parent_uom_flag',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151356-document_type_level_label.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151356-document_type_level_label.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611151356-document_type_level_label.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating document_type_level_label table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('document_type_level_label', 'FK_document_type_level_label_document_type_code');
        await queryRunner.dropForeignKey('document_type_level_label', 'FK_document_type_level_label_insert_user_id');
        await queryRunner.dropForeignKey('document_type_level_label', 'FK_document_type_level_label_last_update_user_id');
        await queryRunner.dropTable('document_type_level_label');
    }
}
