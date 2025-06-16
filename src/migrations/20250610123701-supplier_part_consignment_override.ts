import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usupplier_part_consignment_override20250610123701 implements MigrationInterface {
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
                name: 'supplier_part_consignment_override',
                columns: [
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
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
                ],
            }),
            true,
        );
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('supplier_part_consignment_override');
    }
}
