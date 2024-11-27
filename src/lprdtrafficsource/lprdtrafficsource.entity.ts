import { LprdTrafficLinks } from 'src/lprd-traffic-links/lprd-traffic-links.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('lprd_traffic_source')
export class LprdTrafficSource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  max_provider_delivery_percentage: number;

  @OneToMany(() => LprdTrafficLinks, (trafficLink) => trafficLink.trafficSource)
  trafficLinks: LprdTrafficLinks[];
}
