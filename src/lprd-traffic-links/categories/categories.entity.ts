import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LprdTrafficLinks } from '../lprd-traffic-links.entity';

@Entity('lprd_traffic_links_category')
export class LprdTrafficLinksCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => LprdTrafficLinks, (trafficLink) => trafficLink.categories)
  @JoinColumn({ name: 'lprd_traffic_link_id' })
  lprdTrafficLink: LprdTrafficLinks;
}
