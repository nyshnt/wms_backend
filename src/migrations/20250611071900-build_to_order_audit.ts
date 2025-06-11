import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UbuildToOrderAudit20250611071900 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'build_to_order_audit',
                columns: [
                    {
                        name: 'build_to_order_audit_id',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false, // Assuming primary key is not nullable
                    },
                    {
                        name: 'load_number',
                        type: 'varchar',
                        isNullable: true, // Assuming nullable if not specified
                    },
                    {
                        name: 'build_to_order_audit_type',
                        type: 'varchar',
                        isNullable: true, // Assuming nullable if not specified
                    },
                    {
                        name: 'build_to_order_audit_status',
                        type: 'varchar',
                        isNullable: true, // Assuming nullable if not specified
                    },
                    {
                        name: 'begin_time',
                        type: 'timestamp',
                        isNullable: true, // Assuming nullable if not specified
                    },
                    {
                        name: 'end_time',
                        type: 'timestamp',
                        isNullable: true, // Assuming nullable if not specified
                    },
                    {
                        name: 'asset_type',
                        type: 'varchar',
                        isNullable: true, // Assuming nullable if not specified
                    },
                    {
                        name: 'shipment_id',
                        type: 'varchar',
                        isNullable: true, // Assuming nullable if not specified
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('build_to_order_audit');
    }
}