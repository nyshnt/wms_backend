import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uhold_master_note20250610170044 implements MigrationInterface {
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
                name: 'hold_master_note',
                columns: [
                    {
                        name: 'hold_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'hold_prefix',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'note_line_number',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'note_text',
                        type: 'text',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610170044-hold_master_note.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('hold_master_note', 'FK_hold_master_note_hold_number');
        await queryRunner.dropForeignKey('hold_master_note', 'FK_hold_master_note_hold_prefix');
        await queryRunner.dropForeignKey('hold_master_note', 'FK_hold_master_note_warehouse_id');
        await queryRunner.dropTable('hold_master_note');
    }
}
