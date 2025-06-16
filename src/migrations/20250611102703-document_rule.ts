import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udocument_rule20250611102703 implements MigrationInterface {
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
                name: 'document_rule',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'sequence_number',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'document_format',
                        type: 'varchar'
                    },
                    {
                        name: 'document_quantity',
                        type: 'int'
                    },
                    {
                        name: 'load_level',
                        type: 'varchar'
                    },
                    {
                        name: 'exitpoint',
                        type: 'varchar'
                    },
                    {
                        name: 'device_source',
                        type: 'varchar'
                    },
                    {
                        name: 'document_group',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611102703-document_rule.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('document_rule', 'FK_document_rule_document_type');
        await queryRunner.dropTable('document_rule');
    }
}
