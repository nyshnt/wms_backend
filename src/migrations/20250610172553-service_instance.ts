import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Uservice_instance20250610172553 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Check if the table already exists
        const tableName = this.constructor.name.replace(/^U/, '').replace(/\d+$/, '').toLowerCase();
        const tableExists = await queryRunner.hasTable(tableName);
        if (tableExists) {
            console.log(`Table ${tableName} already exists, skipping creation`);
            return;
        }
        
        try {
        await queryRunner.createTable(
            new Table({
                name: 'service_instance',
                columns: [
                    {
                        name: 'service_instance_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'service_id',
                        type: 'varchar'
                    },
                    {
                        name: 'segment_number',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_instance_type',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'stop_service_flag',
                        type: 'boolean'
                    },
                    {
                        name: 'modified_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'modified_user_id',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'service_rate_id',
                        type: 'varchar'
                    },
                    {
                        name: 'confirm_service_id',
                        type: 'varchar'
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250610172553-service_instance.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service_instance', 'FK_service_instance_service_master');
        await queryRunner.dropForeignKey('service_instance', 'FK_service_instance_service_rate_master');
        await queryRunner.dropForeignKey('service_instance', 'FK_service_instance_confirm_service');
        await queryRunner.dropTable('service_instance');
    }
}
