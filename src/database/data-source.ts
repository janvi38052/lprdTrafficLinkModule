import { DataSource } from 'typeorm';
import { LprdTrafficLinks } from '../modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
import {LprdTrafficLinksCategory } from '../modules/lprd-traffic-links/categories/entities/categories.entity';
import { LprdTrafficLinksClient } from '../modules/lprd-traffic-links/clients/entities/clients.entity';
import { LprdTrafficLinksCampaign } from '../modules/lprd-traffic-links/campaigns/entities/campaigns.entity';
import { MaxDeliveryClient } from '../modules/max-delivery-client/entities/max-delivery-client.entity';
import { MaxDeliveryCampaign } from '../modules/max-delivery-campaign/entities/max-delivery-campaign.entity';
import { LprdTrafficSource } from '../modules/lprdtrafficsource/entities/lprdtrafficsource.entity';
import { LprdTrafficWebsite } from '../modules/lprd-traffic-websites/entities/lprd-traffic-websites.entity';
import { User } from '../modules/user/entities/user.entity';


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
