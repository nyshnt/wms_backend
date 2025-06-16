import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ureport_configuration20250611101817 implements MigrationInterface {
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
                name: 'report_configuration',
                columns: [
                    {
                        name: 'report_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'product_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'report_layout_file',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'default_printer',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'report_type',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'keep_days',
                        type: 'int'
                    },
                    {
                        name: 'enable_EMS_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'EMS_event_name',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'functional_area',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'digital_signature_required_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('report_configuration');
    }
}
