import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CarrierMove } from './carrier_move.entity';

@ObjectType('StopLocation')
@Entity('stop_location')
@Index('IDX_stop_location_stop_id', ['stop_id'], { unique: true })
export class StopLocation extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the stop.' })
    @PrimaryGeneratedColumn('uuid')
    stop_id: string;

    @Field(() => CarrierMove, { description: 'Foreign key referencing the Carrier_Move table.' })
    @ManyToOne(() => CarrierMove)
    @JoinColumn({ name: 'carrier_move_id', referencedColumnName: 'carrier_move_id' })
    carrier_move_id: CarrierMove;
} 