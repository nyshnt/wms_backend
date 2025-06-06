import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { HoldMaster } from './hold_master.entity';

@ObjectType('HoldMasterNote')
@Entity('hold_master_note')
export class HoldMasterNote {
  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'hold_number' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'hold_number', referencedColumnName: 'hold_number' })
  hold_number: HoldMaster;

  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'hold_prefix' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'hold_prefix', referencedColumnName: 'hold_prefix' })
  hold_prefix: HoldMaster;

  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: HoldMaster;

  @Field(() => Number, { description: 'Line number for the note.' })
  @PrimaryColumn({ name: 'note_line_number' })
  note_line_number: number;

  @Field(() => String, { description: 'Text of the note.' })
  @Column({ name: 'note_text', type: 'text', nullable: true })
  note_text: string;
} 