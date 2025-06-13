import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Upick_list_asset_slot20250613111342 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pick_list_asset_slot',
                columns: [
                    {
                        name: 'slot_type_id',
                        type: 'uuid', // Assuming 'uuid' for PrimaryGeneratedColumn
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'asset_slot_code',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'slot_asset_type_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for asset_type_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'asset_type_id_fk', // Column for foreign key (marked as redundant in entity)
                        type: 'varchar', // Assuming varchar for asset_type_id
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'pick_list_asset_slot',
            new TableForeignKey({
                columnNames: ['slot_asset_type_id'],
                referencedColumnNames: ['asset_type_id'],
                referencedTableName: 'asset_type',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        // This foreign key is marked as redundant in the entity definition.
        await queryRunner.createForeignKey(
            'pick_list_asset_slot',
            new TableForeignKey({
                columnNames: ['asset_type_id_fk'],
                referencedColumnNames: ['asset_type_id'],
                referencedTableName: 'asset_type',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pick_list_asset_slot', 'FK_pick_list_asset_slot_slot_asset_type_id');
        await queryRunner.dropForeignKey('pick_list_asset_slot', 'FK_pick_list_asset_slot_asset_type_id_fk');
        await queryRunner.dropTable('pick_list_asset_slot');
    }
}