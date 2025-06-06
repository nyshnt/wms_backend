import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('ContainerZone')
@Entity('container_zone')
export class ContainerZone extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the container zone.' })
    @PrimaryGeneratedColumn('uuid', { name: 'container_zone_id' })
    container_zone_id: string;
} 