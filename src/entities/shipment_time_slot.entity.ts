import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { ShipmentHeader } from './shipment_header.entity';

@ObjectType('ShipmentTimeSlot')
@Entity('shipment_time_slot')
@Index('IDX_shipment_time_slot_time_slot_id', ['time_slot_id'], { unique: true })
export class ShipmentTimeSlot extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the shipment time slot.' })
    @PrimaryGeneratedColumn('uuid')
    time_slot_id: string;

    @Field(() => ShipmentHeader, { description: 'Foreign key referencing the Shipment_Header table.' })
    @ManyToOne(() => ShipmentHeader)
    @JoinColumn({ name: 'shipment_id', referencedColumnName: 'shipment_id' })
    shipment_id: ShipmentHeader;
}
