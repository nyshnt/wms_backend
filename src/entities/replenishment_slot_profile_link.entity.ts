import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReplenishmentWork } from './replenishment_work.entity';
import { SlotProfileItemSet } from './slot_profile_item_set.entity';

@ObjectType('ReplenishmentSlotProfileLink')
@Entity('replenishment_slot_profile_link')
export class ReplenishmentSlotProfileLink {
  @Field(() => ReplenishmentWork, { description: 'Replenishment reference.' })
  @PrimaryColumn({ name: 'replenishment_reference' })
  @ManyToOne(() => ReplenishmentWork)
  @JoinColumn({ name: 'replenishment_reference', referencedColumnName: 'replenishment_reference' })
  replenishment_reference: ReplenishmentWork;

  @Field(() => String, { description: 'Unit of measure for the slot.' })
  @PrimaryColumn({ name: 'slot_unit_of_measure' })
  slot_unit_of_measure: string;

  @Field(() => SlotProfileItemSet, { description: 'Profile name.' })
  @ManyToOne(() => SlotProfileItemSet)
  @JoinColumn({ name: 'profile_name', referencedColumnName: 'profile_name' })
  profile_name: SlotProfileItemSet;

  @Field(() => Number, { description: 'Quantity picked.' })
  @Column({ name: 'picked_quantity', type: 'int' })
  picked_quantity: number;
} 