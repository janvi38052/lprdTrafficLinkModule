import { PartialType } from '@nestjs/mapped-types';
import { CreateLprdTrafficLinksCategoryDto } from './create-category.dto';
export class UpdateMaxDeliveryCampaignDto extends PartialType(CreateLprdTrafficLinksCategoryDto) {}
