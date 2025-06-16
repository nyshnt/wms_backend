import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ualternate_part_master20250610164617 implements MigrationInterface {
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
                name: 'alternate_part_master',
                columns: [
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'alternate_part_type',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'alternate_part_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610164617-alternate_part_master.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('alternate_part_master', 'FK_alternate_part_master_part_number');
        await queryRunner.dropForeignKey('alternate_part_master', 'FK_alternate_part_master_part_client_id');
        await queryRunner.dropTable('alternate_part_master');
    }
}
