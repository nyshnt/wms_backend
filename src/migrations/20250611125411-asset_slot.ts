import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_slot20250611125411 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_slot',
                columns: [
                    {
                        name: 'asset_type',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'slot_code',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('asset_slot');
    }
}
