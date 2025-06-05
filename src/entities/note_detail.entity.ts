import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { NoteType } from './note_type.entity';
import { Client } from './client.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('NoteDetail')
@Entity('note_detail')
@Index('IDX_note_detail_note_id', ['note_id'], { unique: true })
export class NoteDetail extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the note detail.' })
    @PrimaryGeneratedColumn('uuid')
    note_id: string;

    @Field(() => NoteType, { description: 'Foreign key referencing the Note_Type table.' })
    @ManyToOne(() => NoteType)
    @JoinColumn({ name: 'note_type_id', referencedColumnName: 'note_type_id' })
    note_type_id: NoteType;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => String, { description: 'The actual text of the note.' })
    @Column({ type: 'text', nullable: false })
    note_text: string;
}
