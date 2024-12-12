import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LprdTrafficWebsite } from 'src/modules/lprd-traffic-websites/entities/lprd-traffic-websites.entity';
import { LprdTrafficSource } from 'src/modules/lprdtrafficsource/entities/lprdtrafficsource.entity';
import { LprdTrafficLinksCategory } from '../categories/entities/categories.entity';
import { LprdTrafficLinksClient } from '../clients/entities/clients.entity';
import { LprdTrafficLinksCampaign } from '../campaigns/entities/campaigns.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { MaxDeliveryClient } from 'src/modules/max-delivery-client/entities/max-delivery-client.entity';
import { MaxDeliveryCampaign } from 'src/modules/max-delivery-campaign/entities/max-delivery-campaign.entity';

export enum ConfidenceScore {
  VeryConfident = 'Very Confident',
  Confident = 'Confident',
  Medium = 'Medium',
  Low = 'Low',
  VeryLow = 'Very Low',
}

@Entity('lprd_traffic_links')
export class LprdTrafficLinks {
  @PrimaryGeneratedColumn('increment')
  id: number;
 
  track_url:string;

 
  @Column({ type: 'tinyint', width: 3, default: 0 })
  approved: number;

  @Column({ type: 'int' })
  traffic_source_id: number;

  @Column({ type: 'int' })
  traffic_website_id: number;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ type: 'int', nullable: true, default: null })
  max_provider_delivery: number;

  @Column({ type: 'tinyint', default: 0 })
  ignore_campaign_active_status: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  locale: string;

  @Column({ type: 'tinyint', default: 0 })
  path_style_id: number;

  @Column({ type: 'tinyint', nullable: true, default: null })
  use_radius_range: number;

  @Column({ type: 'tinyint', default: 1 })
  use_ip_blacklist: number;

  @Column({ type: 'tinyint', default: 1 })
  lock_category: number;

  @Column({ type: 'tinyint', default: 1 })
  use_capping: number;

  @Column({ type: 'tinyint', default: 1 })
  bypass_time_based_capping: number;

  @Column({ type: 'tinyint', default: 1 })
  block_bots: number;

  @Column({ type: 'tinyint', default: 0 })
  test_traffic: number;

  @Column({ type: 'tinyint', default: 0 })
  test_traffic_percentage: number;

  @Column({ type: 'text', nullable: true })
  category_ids: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tag: string;

  @Column({ type: 'int', nullable: true, default: null })
  quality_score: number;

  @ManyToOne(() => LprdTrafficWebsite, (trafficWebsite) => trafficWebsite.trafficLinks)
  @JoinColumn({ name: 'traffic_website_id' })
  trafficWebsite: LprdTrafficWebsite;

  @ManyToOne(() => LprdTrafficSource, (trafficSource) => trafficSource.trafficLinks)
  @JoinColumn({ name: 'traffic_source_id' })
  trafficSource: LprdTrafficSource;

  @ManyToOne(() => User, (user) => user.lprdTrafficLinkUpdatedBy)
  @JoinColumn({ name: 'updated_by' })
  updatedByUser: User;


  @OneToMany(
    () => LprdTrafficLinksCategory,
    (category) => category.lprdTrafficLink,
    { cascade: true },
  )
  categories: LprdTrafficLinksCategory[];

  @OneToMany(() => LprdTrafficLinksClient, (trafficLinkClient) => trafficLinkClient.lprdTrafficLink)
  clients: LprdTrafficLinksClient[];

  @OneToMany(() => LprdTrafficLinksCampaign, (trafficLinkCampaign) => trafficLinkCampaign.lprdTrafficLink)
  campaigns: LprdTrafficLinksCampaign[];

  @OneToOne(() => MaxDeliveryClient, (deliveryClient) => deliveryClient.lprdTrafficLinkClient)
  maxDeliveryClient: MaxDeliveryClient;

  @OneToOne(() => MaxDeliveryCampaign, (deliveryCampaign) => deliveryCampaign.lprdTrafficLinkCampaign)
  maxDeliveryCampaign: MaxDeliveryCampaign;
}
