import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upart_ftp_detail20250610165648 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
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

        await queryRunner.createForeignKeys('part_ftp_detail', [
            new TableForeignKey({
                columnNames: ['part_number'],
                referencedColumnNames: ['part_number'],
                referencedTableName: 'part_ftp',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['part_client_id'],
                referencedColumnNames: ['part_client_id'],
                referencedTableName: 'part_ftp',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'part_ftp',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['FTP_code'],
                referencedColumnNames: ['FTP_code'],
                referencedTableName: 'part_ftp',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_part_number');
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_part_client_id');
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_warehouse_id');
        await queryRunner.dropForeignKey('part_ftp_detail', 'FK_part_ftp_detail_FTP_code');
        await queryRunner.dropTable('part_ftp_detail');
    }
}
