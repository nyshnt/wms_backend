import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Udocument_type20250611102205 implements MigrationInterface {
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
                name: 'document_type',
                columns: [
                    {
                        name: 'document_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'document_type_code',
                        type: 'varchar'
                    },
                    {
                        name: 'default_load_level',
                        type: 'varchar'
                    },
                    {
                        name: 'data_command',
                        type: 'varchar'
                    },
                    {
                        name: 'break_level',
                        type: 'varchar'
                    },
                    {
                        name: 'billing_flag',
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
        await queryRunner.dropTable('document_type');
    }
}
