import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ubom_detail_instruction20250612164334 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bom_detail_instruction',
                columns: [
                    {
                        name: 'bom_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'bom_line_number',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'instruction_key',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        // Composite foreign key to BOMDetail
        await queryRunner.createForeignKey(
            'bom_detail_instruction',
            new TableForeignKey({
                columnNames: ['bom_number', 'warehouse_id', 'client_id', 'bom_line_number'],
                referencedColumnNames: ['bom_number', 'warehouse_id', 'client_id', 'bom_line_number'], // Assuming these form the composite primary key of bom_detail
                referencedTableName: 'bom_detail',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bom_detail_instruction', 'FK_bom_detail_instruction_bom_detail'); // Generic name for composite FK
        await queryRunner.dropTable('bom_detail_instruction');
    }
}