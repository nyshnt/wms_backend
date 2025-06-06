import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomsConsignment } from './customs_consignment.entity';

@ObjectType('WorkOrderHeader')
@Entity('wkohdr')
@Index('IDX_work_order_number', ['work_order_number'], { unique: true })
@Index('IDX_work_order_revision', ['work_order_revision'], { unique: true })
@Index('IDX_work_order_client_id', ['client_id'], { unique: true })
@Index('IDX_work_order_warehouse_id', ['warehouse_id'], { unique: true })
export class WorkOrderHeader extends BaseEntity {
    @Field(() => String, { description: 'Client ID.' })
    @PrimaryColumn({ name: 'client_id' })
    client_id: string;

    @Field(() => String, { description: 'Work order number.' })
    @PrimaryColumn({ name: 'work_order_number' })
    work_order_number: string;

    @Field(() => String, { description: 'Work order revision.' })
    @PrimaryColumn({ name: 'work_order_revision' })
    work_order_revision: string;

    @Field(() => String, { description: 'Warehouse ID.' })
    @PrimaryColumn({ name: 'warehouse_id' })
    warehouse_id: string;

    @Field(() => Boolean, { description: 'Exclusion flag.' })
    @Column({ type: 'boolean', nullable: true })
    exclusion_flag: boolean;

    @Field(() => Boolean, { description: 'Start flag.' })
    @Column({ type: 'boolean', nullable: true })
    start_flag: boolean;

    @Field(() => String, { description: 'Production line.' })
    @Column({ type: 'varchar', length: 255, nullable: true })
    production_line: string;

    @Field(() => Date, { description: 'Scheduled begin date.' })
    @Column({ type: 'date', nullable: true })
    schedule_begin_date: Date;

    @Field(() => Boolean, { description: 'Auto release pick flag.' })
    @Column({ type: 'boolean', nullable: true })
    auto_release_pick_flag: boolean;

    @Field(() => String, { description: 'Auto release pick time.' })
    @Column({ type: 'time', nullable: true })
    auto_release_pick_time: string;

    @Field(() => String, { description: 'Goal time.' })
    @Column({ type: 'time', nullable: true })
    goal_time: string;

    @Field(() => String, { description: 'Duration time.' })
    @Column({ type: 'time', nullable: true })
    duration_time: string;

    @Field(() => Number, { description: 'Planning sequence.' })
    @Column({ type: 'int', nullable: true })
    plan_sequence: number;

    @Field(() => CustomsConsignment, { description: 'Foreign key referencing Customs_Consignment.' })
    @ManyToOne(() => CustomsConsignment)
    @JoinColumn({ name: 'customs_consignment_id', referencedColumnName: 'customs_consignment_id' })
    customs_consignment_id: CustomsConsignment;
} 