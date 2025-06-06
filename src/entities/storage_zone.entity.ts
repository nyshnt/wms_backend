import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('StorageZone')
@Entity('storage_zone')
export class StorageZone extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the storage zone.' })
    @PrimaryGeneratedColumn('uuid', { name: 'storage_zone_id' })
    storage_zone_id: string;
} 