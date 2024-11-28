import { Module } from '@nestjs/common';
import { LprdTrafficLinksCampaignService } from './campaigns.service';
import { LprdTrafficLinksCampaignController } from './campaigns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinks } from '../entities/lprd-traffic-links.entity';
import { LprdTrafficLinksCampaign } from './entities/campaigns.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficLinksCampaign,LprdTrafficLinks])],
  providers: [LprdTrafficLinksCampaignService ],
  controllers: [LprdTrafficLinksCampaignController],
  exports:[LprdTrafficLinksCampaignService]
})
export class LprdTrafficLinkCampaignsModule {}
