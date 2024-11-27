import { DataSource } from 'typeorm';
import { LprdTrafficLinks } from './lprd-traffic-links/lprd-traffic-links.entity';
import {LprdTrafficLinksCategory } from './lprd-traffic-links/categories/categories.entity';
import { LprdTrafficLinksClient } from './lprd-traffic-links/clients/clients.entity';
import { LprdTrafficLinksCampaign } from './lprd-traffic-links/campaigns/campaigns.entity';
import { MaxDeliveryClient } from './max-delivery-client/max-delivery-client.entity';
import { MaxDeliveryCampaign } from './max-delivery-campaign/max-delivery-campaign.entity';
import { LprdTrafficSource } from './lprdtrafficsource/lprdtrafficsource.entity';
import { LprdTrafficWebsite } from './lprd-traffic-websites/lprd-traffic-websites.entity';
import { User } from './user/user.entity';


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'collegedb',
    entities: [LprdTrafficLinks,LprdTrafficLinksCategory,LprdTrafficLinksClient,LprdTrafficLinksCampaign,MaxDeliveryClient,MaxDeliveryCampaign,LprdTrafficSource,LprdTrafficWebsite,User],
    migrations: ['src/migrations/*.ts'],
    synchronize: false, 
    logging: true,
});
