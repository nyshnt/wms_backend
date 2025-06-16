import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwcs_discrete_snapshot20250611154447 implements MigrationInterface {
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
                name: 'wcs_discrete_snapshot',
                columns: [
                    {
                        name: 'snapshot_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'wcs_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'transaction_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'load_number',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'stock_location',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250611154447-wcs_discrete_snapshot.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_wcs_id');
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_warehouse_id');
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_load_number');
        await queryRunner.dropForeignKey('wcs_discrete_snapshot', 'FK_wcs_discrete_snapshot_stock_location');
        await queryRunner.dropTable('wcs_discrete_snapshot');
    }
}
