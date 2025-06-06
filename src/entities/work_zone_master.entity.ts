import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('WorkZoneMaster')
@Entity('work_zone_master')
export class WorkZoneMaster extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the work zone.' })
    @PrimaryGeneratedColumn('uuid', { name: 'work_zone_id' })
    work_zone_id: string;

    @Field(() => String, { description: 'Name of the work zone.' })
    @Column({ name: 'work_zone_name' })
    workZoneName: string;

    @Field(() => String, { description: 'Description of the work zone.' })
    @Column({ name: 'work_zone_description' })
    workZoneDescription: string;

    @Field(() => String, { description: 'Type of the work zone.' })
    @Column({ name: 'work_zone_type' })
    workZoneType: string;
}
