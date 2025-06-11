import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Urelease_type_command20250611140408 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'release_type_command',
                columns: [
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'release_type_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'source_area_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'release_command',
                        type: 'varchar'
                    },
                    {
                        name: 'extra_arguments',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('release_type_command',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('release_type_command',
            new TableForeignKey({
                columnNames: ['source_area_code'],
                referencedColumnNames: ['area_code'],
                referencedTableName: 'area_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('release_type_command', 'FK_release_type_command_warehouse_id');
        await queryRunner.dropForeignKey('release_type_command', 'FK_release_type_command_source_area_code');
        await queryRunner.dropTable('release_type_command');
    }
}
