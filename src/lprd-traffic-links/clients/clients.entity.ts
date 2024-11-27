import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LprdTrafficLinks } from '../lprd-traffic-links.entity';

@Entity('clients')
export class LprdTrafficLinksClient  {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @ManyToOne(() => LprdTrafficLinks, lprdTrafficLink => lprdTrafficLink.clients)
  @JoinColumn({ name: 'lprd_traffic_link_id' }) 
  lprdTrafficLink: LprdTrafficLinks;
}


