import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('LabelFormat')
@Entity('label_format')
export class LabelFormat {
  @Field(() => String, { description: 'Unique identifier for the label format.' })
  @PrimaryColumn({ name: 'label_format' })
  label_format: string;

  @Field(() => String, { description: 'Default printer for the label.' })
  @Column({ name: 'default_printer', type: 'varchar' })
  default_printer: string;

  @Field(() => String, { description: 'Image file for the label.' })
  @Column({ name: 'image_file', type: 'varchar' })
  image_file: string;

  @Field(() => Boolean, { description: 'Flag for RFID.' })
  @Column({ name: 'RFID_flag', type: 'boolean' })
  RFID_flag: boolean;
} 