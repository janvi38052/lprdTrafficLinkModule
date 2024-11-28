import { PartialType } from '@nestjs/mapped-types';
import { CreateLprdTrafficLinksCampaignDto } from './create-campaigns.dto';
export class UpdateMaxDeliveryCampaignDto extends PartialType(CreateLprdTrafficLinksCampaignDto) {}
