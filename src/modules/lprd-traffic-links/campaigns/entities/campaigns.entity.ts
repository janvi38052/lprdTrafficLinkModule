import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LprdTrafficLinks } from '../../entities/lprd-traffic-links.entity';


@Entity('lprd_traffic_links_campaigns')
export class LprdTrafficLinksCampaign{

  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;


  @ManyToOne(() => LprdTrafficLinks)
  @JoinColumn({ name: 'lprd_traffic_link_id' })
  lprdTrafficLink: LprdTrafficLinks;

  @Column({ type: 'varchar', length: 50, nullable: true })
  status: string;  // E.g., 'active', 'inactive', etc.
}
