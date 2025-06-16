import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upart_ftp_detail20250610165648 implements MigrationInterface {
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
                name: 'part_ftp_detail',
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
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'FTP_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'unit_of_measure_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'unit_quantity',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'length',
                        type: 'float',
                        isNullable: true,
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610165648-part_ftp_detail.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_part_number');
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_part_client_id');
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_warehouse_id');
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_FTP_code');
        await queryRunner.dropTable('part_ftp_detail');
    }
}
