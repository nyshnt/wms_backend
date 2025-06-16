import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureport_signature_configuration20250611112643 implements MigrationInterface {
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
                name: 'report_signature_configuration',
                columns: [
                    {
                        name: 'report_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'signature_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'report_page',
                        type: 'int'
                    },
                    {
                        name: 'signature_top_coordinate',
                        type: 'int'
                    },
                    {
                        name: 'signature_left_coordinate',
                        type: 'int'
                    },
                    {
                        name: 'signature_length',
                        type: 'int'
                    },
                    {
                        name: 'signature_width',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611112643-report_signature_configuration.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating report_signature_configuration table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('report_signature_configuration', 'FK_report_signature_configuration_report_configuration');
        await queryRunner.dropTable('report_signature_configuration');
    }
}
