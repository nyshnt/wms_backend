import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ulabel_format20250611102515 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'label_format',
                columns: [
                    {
                        name: 'label_format',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'default_printer',
                        type: 'varchar'
                    },
                    {
                        name: 'image_file',
                        type: 'varchar'
                    },
                    {
                        name: 'RFID_flag',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('label_format');
    }
}
