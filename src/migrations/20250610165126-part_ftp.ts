import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upart_ftp20250610165126 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKeys('part_ftp', [
            new TableForeignKey({
                columnNames: ['part_number'],
                referencedColumnNames: ['part_number'],
                referencedTableName: 'part_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['part_client_id'],
                referencedColumnNames: ['part_client_id'],
                referencedTableName: 'part_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['FTP_code'],
                referencedColumnNames: ['FTP_code'],
                referencedTableName: 'ftp_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_part_number');
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_part_client_id');
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_FTP_code');
        await queryRunner.dropForeignKey('part_ftp', 'FK_part_ftp_warehouse_id');
        await queryRunner.dropTable('part_ftp');
    }
}
