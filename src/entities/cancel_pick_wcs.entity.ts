import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PickWorkHeader } from './pick_work_header.entity';
import { PickWorkDetail } from './pick_work_detail.entity';

@ObjectType('CancelPickWCS')
@Entity('cancel_pick_wcs')
export class CancelPickWCS {
  @Field(() => String, { description: 'Identifier for the cancellation group.' })
  @PrimaryColumn({ name: 'cancellation_group_id' })
  cancellation_group_id: string;

  @Field(() => String, { description: 'Work reference.' })
  @Column({ name: 'work_reference', nullable: true })
  @ManyToOne(() => PickWorkHeader)
  @JoinColumn({ name: 'work_reference', referencedColumnName: 'work_reference' })
  work_reference: string;

  @Field(() => String, { description: 'Work reference detail ID.' })
  @Column({ name: 'work_reference_detail_id', nullable: true })
  @ManyToOne(() => PickWorkDetail)
  @JoinColumn({ name: 'work_reference_detail_id', referencedColumnName: 'work_reference_detail_id' })
  work_reference_detail_id: string;

  @Field(() => String, { description: 'Status of WCS pick cancellation.' })
  @Column({ name: 'wcs_cancel_pick_status', nullable: true })
  wcs_cancel_pick_status: string;

  @Field(() => Date, { description: 'Date of WCS cancellation request.' })
  @Column({ name: 'wcs_cancel_request_date', type: 'timestamp', nullable: true })
  wcs_cancel_request_date: Date;

  @Field(() => Date, { description: 'Date of WCS cancellation confirmation.' })
  @Column({ name: 'wcs_cancel_confirm_date', type: 'timestamp', nullable: true })
  wcs_cancel_confirm_date: Date;
} 