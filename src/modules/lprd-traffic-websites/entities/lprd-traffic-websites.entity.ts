import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lprd_traffic_websites')
export class LprdTrafficWebsite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column()
  default_url: string;

  @Column()
  track_url: string;

  @OneToMany(() => LprdTrafficLinks, (trafficLink) => trafficLink.trafficWebsite)
  trafficLinks: LprdTrafficLinks[];
}
