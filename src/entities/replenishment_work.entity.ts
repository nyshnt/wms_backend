import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReplenishmentLink } from './replenishment_link.entity';

@ObjectType('ReplenishmentWork')
@Entity('replenishment_work')
export class ReplenishmentWork {
  @Field(() => String, { description: 'Primary and Foreign key referencing Replenishment_Link.' })
  @PrimaryColumn({ name: 'replenishment_reference' })
  @ManyToOne(() => ReplenishmentLink)
  @JoinColumn({ name: 'replenishment_reference', referencedColumnName: 'replenishment_reference' })
  replenishment_reference: string;
} 