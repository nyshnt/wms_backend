import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uvoice_region_detail20250611151159 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'voice_region_detail',
                columns: [
                    {
                        name: 'region_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'voice_validation_function',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'variable_name',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'value',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'insert_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'insert_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'last_update_user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'voice_validation_function_ref',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'warehouse_id_ref',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('voice_region_detail',
            new TableForeignKey({
                columnNames: ['region_number'],
                referencedColumnNames: ['region_number'],
                referencedTableName: 'voice_region',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('voice_region_detail',
            new TableForeignKey({
                columnNames: ['voice_validation_function'],
                referencedColumnNames: ['voice_validation_function'],
                referencedTableName: 'voice_region',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('voice_region_detail',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'voice_region',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('voice_region_detail',
            new TableForeignKey({
                columnNames: ['insert_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('voice_region_detail',
            new TableForeignKey({
                columnNames: ['last_update_user_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'user_master',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_region_number');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_voice_validation_function');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_warehouse_id');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_insert_user_id');
        await queryRunner.dropForeignKey('voice_region_detail', 'FK_voice_region_detail_last_update_user_id');
        await queryRunner.dropTable('voice_region_detail');
    }
}
