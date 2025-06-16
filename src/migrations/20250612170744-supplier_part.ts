import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usupplier_part20250612170744 implements MigrationInterface {
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
                name: 'supplier_part',
                columns: [
                    {
                        name: 'supplier_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_number',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'part_client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'warehouse_id', // Column for foreign key
                        type: 'varchar',
                        isNullable: true // ManyToOne relationships are often nullable unless explicitly marked otherwise
                    },
                    {
                        name: 'lot_format_id',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'reorder_point',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'asset_type',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    }
                ]
            }),
            true
        );

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612170744-supplier_part.ts. You should create these foreign keys when making APIs.');

        // Composite foreign key to PartMaster
        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612170744-supplier_part.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612170744-supplier_part.ts. You should create these foreign keys when making APIs.');

        // Foreign key creation removed - will be added later when making APIs
      console.log('Note: Foreign keys were not created for 20250612170744-supplier_part.ts. You should create these foreign keys when making APIs.');
    }
    catch (error) {
        console.error('Error creating rf_terminal_master table:', error);
        throw error;
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('supplier_part', 'FK_supplier_part_supplier_number');
        await queryRunner.dropForeignKey('supplier_part', 'FK_supplier_part_part_master'); // Generic name for composite FK
        await queryRunner.dropForeignKey('supplier_part', 'FK_supplier_part_client_id');
        await queryRunner.dropForeignKey('supplier_part', 'FK_supplier_part_warehouse_id');
        await queryRunner.dropTable('supplier_part');
    }
}