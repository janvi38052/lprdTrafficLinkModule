import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LprdTrafficLinks } from '../../entities/lprd-traffic-links.entity';

@Entity('clients')
export class LprdTrafficLinksClient  {
  @PrimaryGeneratedColumn({ type: 'int'})
  id: number;

  @Column({ type: 'int' })
  client_id: number;

  @Column({ type: 'int'})
  lprd_traffic_link_id: number;


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


