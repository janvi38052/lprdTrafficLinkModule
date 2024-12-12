import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsBoolean } from 'class-validator';

export class CreateMaxDeliveryCampaignDto {
   @ApiPropertyOptional({description:'campagin_id'})
  @IsInt()
  campaign_id: number;

  @ApiPropertyOptional({description:'max_delivery_percentage'})
  @IsOptional()
  @IsInt()
  max_delivery_percentage?: number;

  @ApiPropertyOptional({description:'status'})
  @IsOptional()
  @IsBoolean()
  active?: boolean;

 
}
