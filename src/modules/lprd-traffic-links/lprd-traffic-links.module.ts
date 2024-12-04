import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksController } from './lprd-traffic-links.controller';
import { LprdTrafficLinksService } from './lprdTrafficLinks.service'; // Import the main service
import { CreateLprdTrafficLinkService } from './createLprdTrafficLinks.service'; // Import the create service
import {UpdateLprdTrafficLinkService } from './updateLprdTrafficLinks.service'; // Import the update service
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { LprdTrafficLinksCategory } from './categories/entities/categories.entity';
import { LprdTrafficLinkCategoriesService } from './categories/categories.service'; // Import the category service
import { LprdTrafficLinkClientsModule } from './clients/clients.module';
import { LprdTrafficLinksClient } from './clients/entities/clients.entity';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { LprdTrafficLinkCampaignsModule } from './campaigns/campaigns.module';
import { LprdTrafficLinksCampaign } from './campaigns/entities/campaigns.entity';
import { LprdTrafficLinksCampaignService } from './campaigns/campaigns.service';
import { MaxDeliveryClient } from 'src/modules/max-delivery-client/entities/max-delivery-client.entity';
import { MaxDeliveryClientModule } from 'src/modules/max-delivery-client/max-delivery-client.module';
import { MaxDeliveryClientService } from 'src/modules/max-delivery-client/max-delivery-client.service';
import { MaxDeliveryCampaign } from 'src/modules/max-delivery-campaign/entities/max-delivery-campaign.entity';
import { MaxDeliveryCampaignModule } from 'src/modules/max-delivery-campaign/max-delivery-campaign.module';
import { MaxDeliveryCampaignService } from 'src/modules/max-delivery-campaign/max-delivery-campaign.service';
import { LprdTrafficSource } from 'src/modules/lprdtrafficsource/entities/lprdtrafficsource.entity';
import { LprdtrafficsourceModule } from 'src/modules/lprdtrafficsource/lprdtrafficsource.module';
import { LprdTrafficSourceService } from 'src/modules/lprdtrafficsource/lprdtrafficsource.service';
import { LprdTrafficWebsite } from 'src/modules/lprd-traffic-websites/entities/lprd-traffic-websites.entity';
import { LprdTrafficWebsitesModule } from 'src/modules/lprd-traffic-websites/lprd-traffic-websites.module';
import { LprdTrafficWebsiteService } from 'src/modules/lprd-traffic-websites/lprd-traffic-websites.service';
import { User } from 'src/modules/user/entities/user.entity';
import { UserModule } from 'src/modules/user/user.module';
import { UserService } from 'src/modules/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LprdTrafficLinks, 
      LprdTrafficLinksCategory, 
      LprdTrafficLinksClient, 
      LprdTrafficLinksCampaign, 
      MaxDeliveryClient, 
      MaxDeliveryCampaign, 
      LprdTrafficSource, 
      LprdTrafficWebsite, 
      User
    ]),
    LprdTrafficLinkClientsModule,
    LprdTrafficLinkCampaignsModule,
    MaxDeliveryClientModule,
    MaxDeliveryCampaignModule,
    LprdtrafficsourceModule,
    LprdTrafficWebsitesModule,
    UserModule
  ],
  controllers: [LprdTrafficLinksController],
  providers: [
    LprdTrafficLinksService,  // Main service
    CreateLprdTrafficLinkService,  // Service to create links
    UpdateLprdTrafficLinkService,  // Service to update links
    LprdTrafficLinkCategoriesService,  // Category service
    LprdTrafficLinksClientService,  // Client service
    LprdTrafficLinksCampaignService,  // Campaign service
    MaxDeliveryClientService,  // Max delivery client service
    MaxDeliveryCampaignService,  // Max delivery campaign service
    LprdTrafficSourceService,  // Traffic source service
    LprdTrafficWebsiteService,  // Traffic website service
    UserService,  // User service
  ],
})
export class LprdTrafficLinksModule {}
