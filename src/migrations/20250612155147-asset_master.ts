import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uasset_master20250612155147 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset_master',
                columns: [
                    {
                        name: 'asset_id',
                        type: 'uuid', // Using 'uuid' for PrimaryGeneratedColumn('uuid')
                        isPrimary: true,
                        isGenerated: true, // Mark as generated
                        generationStrategy: 'uuid' // Specify UUID generation strategy
                    },
                    {
                        name: 'asset_number',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for client_id based on typical IDs
                        isNullable: true // Foreign key from ManyToOne is often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for warehouse_id
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'asset_master',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'], // Assuming 'client_id' is the primary key in 'client' table
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'asset_master',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'], // Assuming 'warehouse_id' is the primary key in 'warehouse' table
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('asset_master', 'FK_asset_master_client_id');
        await queryRunner.dropForeignKey('asset_master', 'FK_asset_master_warehouse_id');
        await queryRunner.dropTable('asset_master');
    }
}