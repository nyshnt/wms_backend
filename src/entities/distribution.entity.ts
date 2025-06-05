import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';
import { DistributionType } from './distribution_type.entity';

@ObjectType('Distribution')
@Entity('distribution')
@Index('IDX_distribution_distribution_id', ['distribution_id'], { unique: true })
export class Distribution extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the distribution.' })
    @PrimaryGeneratedColumn('uuid')
    distribution_id: string;

    @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => Client, { description: 'Primary and Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => String, { description: 'Stocking customer identifier.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    stocking_customer: string;

    @Field(() => String, { description: 'Tracking number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    tracking_number: string;

    @Field(() => String, { description: 'Invoice number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    invoice_number: string;

    @Field(() => String, { description: 'Supplier number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    supplier_number: string;

    @Field(() => String, { description: 'Invoice line number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    invoice_line_number: string;

    @Field(() => String, { description: 'Invoice subline number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    invoice_subline_number: string;

    @Field(() => DistributionType, { description: 'Foreign key referencing Distribution_Type.' })
    @ManyToOne(() => DistributionType)
    @JoinColumn({ name: 'distribution_type', referencedColumnName: 'distribution_type' })
    distribution_type: DistributionType;
} 