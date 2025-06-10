import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uftp_master20250610164946 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'ftp_master',
                columns: [
                    {
                        name: 'FTP_code',
                        type: 'varchar',
                        isPrimary: true,
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ftp_master');
    }
}
