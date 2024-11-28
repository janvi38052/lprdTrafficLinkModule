import {Column, Entity, JoinColumn,ManyToOne, PrimaryGeneratedColumn,} from 'typeorm';
import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';

@Entity('max_delivery_client')
export class MaxDeliveryClient  {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', unsigned: true })
  client_id: number;

//   @Column({ type: 'int', unsigned: true })
//   tid: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  max_delivery_percentage: number;

  @Column({ type: 'tinyint', unsigned: true, default: 0 })
  active: number;

  @ManyToOne(() => LprdTrafficLinks)
  @JoinColumn({ name: 'tid' })
  lprdTrafficLinkClient: LprdTrafficLinks;
}
