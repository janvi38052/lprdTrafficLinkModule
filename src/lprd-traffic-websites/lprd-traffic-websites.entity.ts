import { LprdTrafficLinks } from 'src/lprd-traffic-links/lprd-traffic-links.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lprd_traffic_websites')
export class LprdTrafficWebsite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @OneToMany(() => LprdTrafficLinks, (trafficLink) => trafficLink.trafficWebsite)
  trafficLinks: LprdTrafficLinks[];
}
