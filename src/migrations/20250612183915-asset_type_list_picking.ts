import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uasset_type_list_picking20250612183915 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_type_list_picking',
                columns: [
                    {
                        name: 'asset_type_id',
                        type: 'uuid', // Assuming 'uuid' for PrimaryGeneratedColumn
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'asset_category',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'serialized_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'temporary_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'container_flag',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'list_pick_asset_flag',
                        type: 'boolean',
                        isNullable: false
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('asset_type_list_picking');
    }
}