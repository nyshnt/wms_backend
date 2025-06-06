import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('SlotItemSetItem')
@Entity('slot_item_set_item')
export class SlotItemSetItem {
  @Field(() => String, { description: 'Item set.' })
  @PrimaryColumn({ name: 'item_set' })
  item_set: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Item number.' })
  @PrimaryColumn({ name: 'item_number' })
  item_number: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;
} 