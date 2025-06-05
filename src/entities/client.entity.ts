import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('Client')
@Entity('clients')
@Index('IDX_clients_client_id', ['client_id'], { unique: true })
export class Client extends BaseEntity {
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    client_id: string;
}