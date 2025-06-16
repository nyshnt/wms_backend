import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwork_order_detail20250612165826 implements MigrationInterface {
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
                name: 'work_order_detail',
                columns: [
                    {
                        name: 'work_order_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_order_revision',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'work_order_line_number',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'segment_number',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'lot_number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            }),
            true
        );
    } catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('work_order_detail');
    }
}