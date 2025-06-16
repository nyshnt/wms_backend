import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ubuild_to_order_audit20250611124337 implements MigrationInterface {
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
                name: 'build_to_order_audit',
                columns: [
                    {
                        name: 'build_to_order_audit_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'load_number',
                        type: 'varchar'
                    },
                    {
                        name: 'build_to_order_audit_type',
                        type: 'varchar'
                    },
                    {
                        name: 'build_to_order_audit_status',
                        type: 'varchar'
                    },
                    {
                        name: 'begin_time',
                        type: 'timestamp'
                    },
                    {
                        name: 'end_time',
                        type: 'timestamp'
                    },
                    {
                        name: 'asset_type',
                        type: 'varchar'
                    },
                    {
                        name: 'shipment_id',
                        type: 'varchar'
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
        await queryRunner.dropTable('build_to_order_audit');
    }
}
