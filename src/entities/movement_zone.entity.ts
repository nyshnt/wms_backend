import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('MovementZone')
@Entity('movement_zone')
export class MovementZone extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the movement zone.' })
    @PrimaryGeneratedColumn('uuid', { name: 'movement_zone_id' })
    movement_zone_id: string;
} 