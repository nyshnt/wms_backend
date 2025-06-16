import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uwarehouse_service_extent_move_zone20250610171340 implements MigrationInterface {
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
                name: 'wh_serv_extent_mov_zone',
                columns: [
                    {
                        name: 'serv_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'wh_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exitpnt_typ',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exitpnt',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'src_mov_zone_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'dst_mov_zone_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'moddte',
                        type: 'timestamp',
                    },
                    {
                        name: 'mod_usr_id',
                        type: 'varchar',
                        length: '255',
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610171340-warehouse_service_extent_move_zone.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wh_serv_extent_mov_zone', 'FK_wh_serv_extent_mov_zone_warehouse_service_expoint');
        await queryRunner.dropTable('wh_serv_extent_mov_zone');
    }
}
