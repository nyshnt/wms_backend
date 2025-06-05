import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('NoteType')
@Entity('note_type')
@Index('IDX_note_type_id', ['note_type_id'], { unique: true })
export class NoteType extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the note type.' })
    @PrimaryGeneratedColumn('uuid')
    note_type_id: string;

    @Field(() => String, { description: 'Description of the note type.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    note_type_description: string;
}
