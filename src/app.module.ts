import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksModule } from './lprd-traffic-links/lprd-traffic-links.module';
import { LprdTrafficLinks } from './lprd-traffic-links/lprd-traffic-links.entity';
import { LprdTrafficLinksCategory } from './lprd-traffic-links/categories/categories.entity';
import { LprdTrafficLinkCategoriesModule } from './lprd-traffic-links/categories/categories.module';
import { LprdTrafficLinksClient } from './lprd-traffic-links/clients/clients.entity';
import { LprdTrafficLinkClientsModule } from './lprd-traffic-links/clients/clients.module';
import { LprdTrafficLinksCampaign } from './lprd-traffic-links/campaigns/campaigns.entity';
import { MaxDeliveryClientModule } from './max-delivery-client/max-delivery-client.module';
import { MaxDeliveryClient } from './max-delivery-client/max-delivery-client.entity';
import { MaxDeliveryCampaignModule } from './max-delivery-campaign/max-delivery-campaign.module';
import { MaxDeliveryCampaign } from './max-delivery-campaign/max-delivery-campaign.entity';
import { LprdtrafficsourceModule } from './lprdtrafficsource/lprdtrafficsource.module';
import { LprdTrafficSource } from './lprdtrafficsource/lprdtrafficsource.entity';
import { LprdTrafficWebsitesModule } from './lprd-traffic-websites/lprd-traffic-websites.module';
import { LprdTrafficWebsite } from './lprd-traffic-websites/lprd-traffic-websites.entity';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',   
      database: 'collegedb',
      entities: [LprdTrafficLinks,LprdTrafficLinksCategory,LprdTrafficLinksClient,LprdTrafficLinksCampaign,MaxDeliveryClient,MaxDeliveryCampaign,LprdTrafficSource,LprdTrafficWebsite,User],
      synchronize: true,       
      logging: true,
    }),
    LprdTrafficLinksModule,
    LprdTrafficLinkCategoriesModule,
    LprdTrafficLinkClientsModule,
    LprdTrafficLinksCampaign,
    MaxDeliveryClientModule,
    MaxDeliveryCampaignModule,
    LprdtrafficsourceModule,
    LprdTrafficWebsitesModule,
    UserModule
    
 

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
