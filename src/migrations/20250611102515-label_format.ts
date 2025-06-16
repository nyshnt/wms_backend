import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ulabel_format20250611102515 implements MigrationInterface {
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
                name: 'label_format',
                columns: [
                    {
                        name: 'label_format',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_printer',
                        type: 'varchar'
                    },
                    {
                        name: 'image_file',
                        type: 'varchar'
                    },
                    {
                        name: 'RFID_flag',
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
        await queryRunner.dropTable('label_format');
    }
}
