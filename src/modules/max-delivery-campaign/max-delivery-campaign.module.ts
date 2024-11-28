import { Module } from '@nestjs/common';
import { MaxDeliveryCampaignController } from './max-delivery-campaign.controller';
import { MaxDeliveryCampaignService } from './max-delivery-campaign.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaxDeliveryCampaign } from './entities/max-delivery-campaign.entity';
import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MaxDeliveryCampaign,LprdTrafficLinks])],
  controllers: [MaxDeliveryCampaignController],
  providers: [MaxDeliveryCampaignService],
  exports:[MaxDeliveryCampaignService]
})
export class MaxDeliveryCampaignModule {}
