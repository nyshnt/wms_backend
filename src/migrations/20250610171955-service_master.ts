import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_master20250610171955 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'service_master',
                columns: [
                    {
                        name: 'service_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'serv_id',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'service_type',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'serv_typ',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'activity_code',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'actcod',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'image_file',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'imgfil',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'creation_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'created_user_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'active_status',
                        type: 'boolean',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKeys('service_master', [
            new TableForeignKey({
                columnNames: ['service_rate_id'],
                referencedColumnNames: ['service_rate_id'],
                referencedTableName: 'service_rate_master',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['warehouse_service_id'],
                referencedColumnNames: ['service_id'],
                referencedTableName: 'Warehouse_Service',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service_master', 'FK_service_master_service_rate_id');
        await queryRunner.dropForeignKey('service_master', 'FK_service_master_warehouse_service_id');
        await queryRunner.dropTable('service_master');
    }
}
