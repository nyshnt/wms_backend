import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomsConsignment } from './customs_consignment.entity';

@ObjectType('WorkOrderHeader')
@Entity('work_order_header')
@Index('IDX_work_order_number', ['work_order_number'], { unique: true })
@Index('IDX_work_order_revision', ['work_order_revision'], { unique: true })
@Index('IDX_work_order_client_id', ['client_id'], { unique: true })
@Index('IDX_work_order_warehouse_id', ['warehouse_id'], { unique: true })
export class WorkOrderHeader extends BaseEntity {
    @Field(() => String, { description: 'Work order number.' })
    @PrimaryGeneratedColumn('uuid')
    work_order_number: string;

    @Field(() => String, { description: 'Work order revision.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    work_order_revision: string;

    @Field(() => String, { description: 'Client ID.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    client_id: string;

    @Field(() => String, { description: 'Warehouse ID.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    warehouse_id: string;

    @Field(() => CustomsConsignment, { description: 'Foreign key referencing Customs_Consignment.' })
    @ManyToOne(() => CustomsConsignment)
    @JoinColumn({ name: 'customs_consignment_id', referencedColumnName: 'customs_consignment_id' })
    customs_consignment_id: CustomsConsignment;
} 