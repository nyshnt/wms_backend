import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Ubom_header_instruction20250612163016 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bom_header_instruction',
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
                        name: 'instruction_key',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'bom_header_instruction',
            new TableForeignKey({
                columnNames: ['bom_number'],
                referencedColumnNames: ['bom_number'], // Assuming bom_number is unique/primary in bom_header
                referencedTableName: 'bom_header',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'bom_header_instruction',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );

        await queryRunner.createForeignKey(
            'bom_header_instruction',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedColumnNames: ['client_id'],
                referencedTableName: 'client',
                onDelete: 'CASCADE' // Assuming CASCADE for primary key FKs
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bom_header_instruction', 'FK_bom_header_instruction_bom_number');
        await queryRunner.dropForeignKey('bom_header_instruction', 'FK_bom_header_instruction_warehouse_id');
        await queryRunner.dropForeignKey('bom_header_instruction', 'FK_bom_header_instruction_client_id');
        await queryRunner.dropTable('bom_header_instruction');
    }
}