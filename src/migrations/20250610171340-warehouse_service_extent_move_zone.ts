import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uwarehouse_service_extent_move_zone20250610171340 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wh_serv_extent_mov_zone',
                columns: [
                    {
                        name: 'serv_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'wh_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exitpnt_typ',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'exitpnt',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'src_mov_zone_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'dst_mov_zone_id',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'moddte',
                        type: 'timestamp',
                    },
                    {
                        name: 'mod_usr_id',
                        type: 'varchar',
                        length: '255',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'wh_serv_extent_mov_zone',
            new TableForeignKey({
                columnNames: ['serv_id', 'wh_id', 'exitpnt_typ', 'exitpnt'],
                referencedColumnNames: ['service_id', 'warehouse_id', 'exitpoint_type', 'exitpoint'],
                referencedTableName: 'warehouse_service_expoint',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('wh_serv_extent_mov_zone', 'FK_wh_serv_extent_mov_zone_warehouse_service_expoint');
        await queryRunner.dropTable('wh_serv_extent_mov_zone');
    }
}
