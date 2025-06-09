import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickList } from './pick_list.entity';

@ObjectType()
@Entity('pick_work_header_list_picking')
export class PickWorkHeaderListPicking {
  @Field(() => String, { description: 'Unique work reference identifier.' })
  @PrimaryColumn({ name: 'work_reference' })
  work_reference: string;

  @Field(() => PickList, { description: 'Foreign key referencing Pick_List.' })
  @ManyToOne(() => PickList)
  @JoinColumn({ name: 'pick_list_id' })
  pick_list: PickList;

  @Field(() => Boolean, { description: 'Flag indicating list picking.' })
  @Column({ name: 'list_pick_flag' })
  list_pick_flag: boolean;
} 