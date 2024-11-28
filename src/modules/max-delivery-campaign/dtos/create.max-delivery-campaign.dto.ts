import { IsInt, IsOptional, IsBoolean } from 'class-validator';

export class CreateMaxDeliveryCampaignDto {
  @IsInt()
  campaign_id: number;

  @IsOptional()
  @IsInt()
  max_delivery_percentage?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

 
}
