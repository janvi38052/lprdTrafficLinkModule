import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksController } from './lprd-traffic-links.controller';
import { LprdTrafficLinksService } from './lprd-traffic-links.service';
import { LprdTrafficLinks } from './lprd-traffic-links.entity';
import { LprdTrafficLinksCategory } from './categories/categories.entity';
import { LprdTrafficLinksCategoryService } from './categories/categories.service'; // Import the service
import { LprdTrafficLinkClientsModule } from './clients/clients.module';
import { LprdTrafficLinksClient } from './clients/clients.entity';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { LprdTrafficLinkCampaignsModule } from './campaigns/campaigns.module';
import { LprdTrafficLinksCampaign } from './campaigns/campaigns.entity';
import { LprdTrafficLinksCampaignService } from './campaigns/campaigns.service';
import { MaxDeliveryClient } from 'src/max-delivery-client/max-delivery-client.entity';
import { MaxDeliveryClientModule } from 'src/max-delivery-client/max-delivery-client.module';
import { MaxDeliveryClientService } from 'src/max-delivery-client/max-delivery-client.service';
import { MaxDeliveryCampaign } from 'src/max-delivery-campaign/max-delivery-campaign.entity';
import { MaxDeliveryCampaignModule } from 'src/max-delivery-campaign/max-delivery-campaign.module';
import { MaxDeliveryCampaignService } from 'src/max-delivery-campaign/max-delivery-campaign.service';
import { LprdTrafficSource } from 'src/lprdtrafficsource/lprdtrafficsource.entity';
import { LprdtrafficsourceModule } from 'src/lprdtrafficsource/lprdtrafficsource.module';
import { LprdTrafficSourceService } from 'src/lprdtrafficsource/lprdtrafficsource.service';
import { LprdTrafficWebsite } from 'src/lprd-traffic-websites/lprd-traffic-websites.entity';
import { LprdTrafficWebsitesModule } from 'src/lprd-traffic-websites/lprd-traffic-websites.module';
import { LprdTrafficWebsiteService } from 'src/lprd-traffic-websites/lprd-traffic-websites.service';
import { User } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LprdTrafficLinks, LprdTrafficLinksCategory,LprdTrafficLinksClient,LprdTrafficLinksCampaign,MaxDeliveryClient,MaxDeliveryCampaign,LprdTrafficSource,LprdTrafficWebsite,User]),
    LprdTrafficLinkClientsModule,
    LprdTrafficLinkCampaignsModule,
    LprdTrafficLinkCampaignsModule,
    MaxDeliveryClientModule,
    MaxDeliveryCampaignModule,
    LprdtrafficsourceModule,
    LprdTrafficWebsitesModule,
    UserModule
  ],
  controllers: [LprdTrafficLinksController],
  providers: [
    LprdTrafficLinksService,
    LprdTrafficLinksCategoryService,
    LprdTrafficLinksClientService,
    LprdTrafficLinksCampaignService,
    MaxDeliveryClientService,
    MaxDeliveryCampaignService,
    LprdTrafficSourceService,
    LprdTrafficWebsiteService,
    UserService
  ],
})
export class LprdTrafficLinksModule {}
