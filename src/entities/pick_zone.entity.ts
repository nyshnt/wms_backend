import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('PickZone')
@Entity('pick_zone')
export class PickZone extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the pick zone.' })
    @PrimaryGeneratedColumn('uuid', { name: 'pick_zone_id' })
    pick_zone_id: string;
} 