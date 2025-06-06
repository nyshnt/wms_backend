import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('AssetSlot')
@Entity('asset_slot')
export class AssetSlot {
  @Field(() => String, { description: 'Asset type.' })
  @PrimaryColumn({ name: 'asset_type' })
  asset_type: string;

  @Field(() => String, { description: 'Slot.' })
  @PrimaryColumn({ name: 'slot' })
  slot: string;

  @Field(() => String, { description: 'Code for the slot.' })
  @Column({ name: 'slot_code', type: 'varchar' })
  slot_code: string;
} 