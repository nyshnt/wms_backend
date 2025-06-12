import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Utransportation_plan_line20250612155847 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'transportation_plan_line',
                columns: [
                    {
                        name: 'transportation_plan_line_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for warehouse_id
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'client_id', // Column for foreign key
                        type: 'varchar', // Assuming varchar for client_id
                        isNullable: true
                    }
                    // Columns from BaseEntity are not included as its content is not available.
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'transportation_plan_line',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );

        await queryRunner.createForeignKey(
            'transportation_plan_line',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'SET NULL' // Assuming SET NULL for nullable foreign keys
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('transportation_plan_line', 'FK_transportation_plan_line_warehouse_id');
        await queryRunner.dropForeignKey('transportation_plan_line', 'FK_transportation_plan_line_client_id');
        await queryRunner.dropTable('transportation_plan_line');
    }
}