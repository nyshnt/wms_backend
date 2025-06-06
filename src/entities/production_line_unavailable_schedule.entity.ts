import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UnavailableScheduleNote } from './unavailable_schedule_note.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('ProductionLineUnavailableSchedule')
@Entity('production_line_unavailable_schedule')
export class ProductionLineUnavailableSchedule {
  @Field(() => String, { description: 'Primary and Foreign key referencing Unavailable_Schedule_Note.' })
  @PrimaryColumn({ name: 'unavailable_id' })
  @ManyToOne(() => UnavailableScheduleNote)
  @JoinColumn({ name: 'unavailable_id', referencedColumnName: 'unavailable_id' })
  unavailable_id: string;

  @Field(() => String, { description: 'Production line.' })
  @Column({ name: 'production_line', type: 'varchar', length: 255, nullable: true })
  production_line: string;

  @Field(() => String, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Date, { description: 'Start date for the unavailability.' })
  @Column({ name: 'begin_date', type: 'date', nullable: true })
  begin_date: Date;

  @Field(() => Date, { description: 'End date for the unavailability.' })
  @Column({ name: 'end_date', type: 'date', nullable: true })
  end_date: Date;

  @Field(() => String, { description: 'Reason code for unavailability.' })
  @Column({ name: 'unavailable_reason_code', type: 'varchar', length: 255, nullable: true })
  unavailable_reason_code: string;
} 