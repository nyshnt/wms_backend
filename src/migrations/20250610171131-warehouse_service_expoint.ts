import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_service_expoint20250610171131 implements MigrationInterface {
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
                name: 'warehouse_service_expoint',
                columns: [
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exitpoint_type',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exitpoint',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'modified_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
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
        await queryRunner.dropTable('warehouse_service_expoint');
    }
}
