import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { SlotItemSetItem } from './slot_item_set_item.entity';

@ObjectType('SlotProfileItemSet')
@Entity('slot_profile_item_set')
export class SlotProfileItemSet {
  @Field(() => SlotItemSetItem, { description: 'Item set.' })
  @PrimaryColumn({ name: 'item_set' })
  @ManyToOne(() => SlotItemSetItem)
  @JoinColumn({ name: 'item_set', referencedColumnName: 'item_set' })
  item_set: SlotItemSetItem;

  @Field(() => SlotItemSetItem, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => SlotItemSetItem)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: SlotItemSetItem;

  @Field(() => String, { description: 'Profile name.' })
  @PrimaryColumn({ name: 'profile_name' })
  profile_name: string;
} 