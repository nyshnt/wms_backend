import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ubom_detail_instruction20250612164334 implements MigrationInterface {
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
                name: 'bom_detail_instruction',
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
                        name: 'bom_line_number',
                        type: 'int',
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

        // Composite foreign key to BOMDetail
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612164334-bom_detail_instruction.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bom_detail_instruction', 'FK_bom_detail_instruction_bom_detail'); // Generic name for composite FK
        await queryRunner.dropTable('bom_detail_instruction');
    }
}