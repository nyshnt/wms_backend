import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('CarrierMove')
@Entity('carrier_move')
@Index('IDX_carrier_move_id', ['carrier_move_id'], { unique: true })
export class CarrierMove extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the carrier move.' })
    @PrimaryGeneratedColumn('uuid')
    carrier_move_id: string;
} 