import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uzone_master20250611155805 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'zone_master',
                columns: [
                    {
                        name: 'work_zone_code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'max_devices',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'zone_description',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'creation_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'last_update_date',
                        type: 'timestamp',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('zone_master',
            new TableForeignKey({
                columnNames: ['warehouse_id'],
                referencedColumnNames: ['warehouse_id'],
                referencedTableName: 'warehouse',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('zone_master', 'FK_zone_master_warehouse_id');
        await queryRunner.dropTable('zone_master');
    }
}
