import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { InventoryStatus } from './inventory_status.entity';

@ObjectType('AgeProfile')
@Entity('age_profile')
export class AgeProfile {
  @Field(() => String, { description: 'Name of the age profile.' })
  @PrimaryColumn({ name: 'age_profile_name' })
  age_profile_name: string;

  @Field(() => InventoryStatus, { description: 'Foreign key referencing Inventory_Status.' })
  @ManyToOne(() => InventoryStatus)
  @JoinColumn({ name: 'inventory_status', referencedColumnName: 'inventory_status' })
  inventory_status: InventoryStatus;
} 