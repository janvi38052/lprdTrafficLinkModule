import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LprdTrafficLinks } from '../../entities/lprd-traffic-links.entity';

@Entity('lprd_traffic_links_categories')
export class LprdTrafficLinksCategory {
  
  @PrimaryGeneratedColumn({ type: 'int'})
  id: number;

     @Column()
   name:string;

  @Column({ type: 'int' })
  lprd_traffic_link_id: number;

  @ManyToOne(() => LprdTrafficLinks, lprdTrafficLink => lprdTrafficLink.categories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lprd_traffic_link_id' })
  lprdTrafficLink: LprdTrafficLinks;
}
