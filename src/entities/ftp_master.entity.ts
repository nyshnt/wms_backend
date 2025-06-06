import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('FTPMaster')
@Entity('ftp_master')
export class FTPMaster {
  @Field(() => String, { description: 'Unique identifier for the FTP code.' })
  @PrimaryColumn({ name: 'FTP_code' })
  FTP_code: string;
} 