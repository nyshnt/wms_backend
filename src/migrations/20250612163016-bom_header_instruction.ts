import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ubom_header_instruction20250612163016 implements MigrationInterface {
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
                name: 'bom_header_instruction',
                columns: [
                    {
                        name: 'bom_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'instruction_key',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612163016-bom_header_instruction.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612163016-bom_header_instruction.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612163016-bom_header_instruction.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bom_header_instruction', 'FK_bom_header_instruction_bom_number');
        await queryRunner.dropForeignKey('bom_header_instruction', 'FK_bom_header_instruction_warehouse_id');
        await queryRunner.dropForeignKey('bom_header_instruction', 'FK_bom_header_instruction_client_id');
        await queryRunner.dropTable('bom_header_instruction');
    }
}