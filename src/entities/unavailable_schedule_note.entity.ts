import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WorkOrderHeaderNote } from './work_order_header_note.entity';

@ObjectType('UnavailableScheduleNote')
@Entity('unavailable_schedule_note')
export class UnavailableScheduleNote {
  @Field(() => String, { description: 'Unique identifier for the unavailable schedule.' })
  @PrimaryColumn({ name: 'unavailable_id' })
  unavailable_id: string;

  @Field(() => Number, { description: 'Primary and Foreign key referencing Work_Order_Header_Note.' })
  @PrimaryColumn({ name: 'note_line_number' })
  @ManyToOne(() => WorkOrderHeaderNote)
  @JoinColumn({ name: 'note_line_number', referencedColumnName: 'note_line_number' })
  note_line_number: number;

  @Field(() => String, { description: 'Text of the note.' })
  @Column({ name: 'note_text', type: 'text', nullable: true })
  note_text: string;

  @Field(() => Boolean, { description: 'Flag indicating if the note has been edited.' })
  @Column({ name: 'edited_flag', type: 'boolean', nullable: true })
  edited_flag: boolean;
} 