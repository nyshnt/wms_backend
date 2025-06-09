import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('DDA_Master')
export class DDAMaster {
  @PrimaryGeneratedColumn()
  dda_id: string;

  @Column()
  dda_name: string;

  @Column()
  description: string;

  @Column()
  is_active: boolean;
} 