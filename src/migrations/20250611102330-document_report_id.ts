import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udocument_report_id20250611102330 implements MigrationInterface {
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
                name: 'document_report_id',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'report_id',
                        type: 'varchar',
                        isPrimary: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611102330-document_report_id.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611102330-document_report_id.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('document_report_id', 'FK_document_report_id_document_type');
        await queryRunner.dropForeignKey('document_report_id', 'FK_document_report_id_report_configuration');
        await queryRunner.dropTable('document_report_id');
    }
}
