import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('TransportationPlanLine')
@Entity('transportation_plan_line')
@Index('IDX_transportation_plan_line_id', ['transportation_plan_line_id'], { unique: true })
export class TransportationPlanLine extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the transportation plan line.' })
    @PrimaryGeneratedColumn('uuid')
    transportation_plan_line_id: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;
}
