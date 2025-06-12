import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Utime_zone_mapping20250612120515 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Time_Zone_Mapping',
                columns: [
                    {
                        name: 'java_timezone_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'win32_timezone_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'enabled_flag',
                        type: 'boolean',
                        isNullable: true
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Time_Zone_Mapping');
    }
}
