import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uarchived_compartment_header20250610183005 implements MigrationInterface {
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
                name: 'archived_compartment_header',
                columns: [
                    {
                        name: 'compartment_key',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'added_date',
                        type: 'date'
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
        await queryRunner.dropTable('archived_compartment_header');
    }
}
