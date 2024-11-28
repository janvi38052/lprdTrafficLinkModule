import { PartialType } from '@nestjs/mapped-types';
import { CreateMaxDeliveryCampaignDto } from './create.max-delivery-campaign.dto';

export class UpdateMaxDeliveryCampaignDto extends PartialType(CreateMaxDeliveryCampaignDto) {}
