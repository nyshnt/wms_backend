import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Upart_ftp20250610165126 implements MigrationInterface {
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
                name: 'part_ftp',
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
                        name: 'FTP_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610165126-part_ftp.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_part_number');
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_part_client_id');
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_FTP_code');
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_warehouse_id');
        await queryRunner.dropTable('part_ftp');
    }
}
