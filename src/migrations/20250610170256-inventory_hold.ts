import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uinventory_hold20250610170256 implements MigrationInterface {
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
                name: 'inventory_hold',
                columns: [
                    {
                        name: 'hold_number',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'inventory_detail_number',
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
                        name: 'hold_date',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'hold_user_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610170256-inventory_hold.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_hold_number');
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_inventory_detail_number');
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_hold_prefix');
        await queryRunner.dropForeignKey('inventory_hold', 'FK_inventory_hold_warehouse_id');
        await queryRunner.dropTable('inventory_hold');
    }
}
