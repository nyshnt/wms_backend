import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Uservice_rate_sample20250610171752 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'serv_rate_smpl',
                columns: [
                    {
                        name: 'serv_rate_id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'mingty',
                        type: 'int',
                    },
                    {
                        name: 'prob_qty',
                        type: 'int',
                    },
                    {
                        name: 'max_prob_qty',
                        type: 'int',
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
            'serv_rate_smpl',
            new TableForeignKey({
                columnNames: ['serv_rate_id'],
                referencedColumnNames: ['service_rate_id'],
                referencedTableName: 'service_rate_master',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('serv_rate_smpl', 'FK_serv_rate_smpl_service_rate_id');
        await queryRunner.dropTable('serv_rate_smpl');
    }
}
