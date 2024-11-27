import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne } from 'typeorm';
import { LprdTrafficLinksCategory } from './categories/categories.entity';
import { LprdTrafficLinksClient } from './clients/clients.entity';
import { LprdTrafficLinksCampaign } from './campaigns/campaigns.entity';
import { MaxDeliveryClient } from 'src/max-delivery-client/max-delivery-client.entity';
import { MaxDeliveryCampaign } from 'src/max-delivery-campaign/max-delivery-campaign.entity';
import { LprdTrafficSource } from 'src/lprdtrafficsource/lprdtrafficsource.entity';
import { LprdTrafficWebsite } from 'src/lprd-traffic-websites/lprd-traffic-websites.entity';
import { User } from 'src/user/user.entity';

export enum ConfidenceScore {
  VeryConfident = 'Very Confident',
  Confident = 'Confident',
  Medium = 'Medium',
  Low = 'Low',
  VeryLow = 'Very Low',
}

@Entity('lprd_traffic_links')
export class LprdTrafficLinks extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  approved: number;

  
  @Column()
  max_provider_delivery: number;

  @Column()
  ignore_campaign_active_status: number;

  @Column()
  locale: string;

  @Column()
  path_style_id: number;

  @Column({ type: 'tinyint', nullable: true, default: null })
  use_radius_range: number;

  @Column()
  use_ip_blacklist: number;

  @Column()
  lock_category: number;

  @Column()
  use_capping: number;

  @Column()
  bypass_time_based_capping: number;

  @Column()
  block_bots: number;

  @Column()
  test_traffic_percentage: number;

  @Column()
  tag: string;

  @Column()
  quality_score: number;

  @OneToMany(() => LprdTrafficLinksCategory, (category) => category.lprdTrafficLink, { eager: true })
  categories: LprdTrafficLinksCategory[];

  @OneToMany(
    () => LprdTrafficLinksClient,
    (trafficLinkClient) => trafficLinkClient.lprdTrafficLink,
  )
  clients: LprdTrafficLinksClient[];

  @OneToMany(
    () => LprdTrafficLinksCampaign,
    (trafficLinkCampaign) => trafficLinkCampaign.lprdTrafficLink,
  )
  campaigns: LprdTrafficLinksCampaign[];

  @OneToOne(() => MaxDeliveryClient, (deliveryClient) => deliveryClient.lprdTrafficLinkClient)
  maxDeliveryClient: MaxDeliveryClient;

  @OneToOne(() => MaxDeliveryCampaign, (deliveryCampaign) => deliveryCampaign.lprdTrafficLinkCampaign)
  maxDeliveryCampaign: MaxDeliveryCampaign;

  @ManyToOne(
    () => LprdTrafficSource,
    (trafficSource) => trafficSource.trafficLinks,
  )
  @JoinColumn({ name: 'traffic_source_id' })
  trafficSource: LprdTrafficSource;
  

  @ManyToOne(
    () => LprdTrafficWebsite,
    (trafficWebsite) => trafficWebsite.trafficLinks,
  )
  @JoinColumn({ name: 'traffic_website_id' })
  trafficWebsite: LprdTrafficWebsite;

  @ManyToOne(() => User, (user) => user.lprdTrafficLinkUpdatedBy)
  @JoinColumn({ name: 'updated_by' })
  updatedByUser: User;

}
