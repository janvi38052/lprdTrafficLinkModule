import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateLprdTrafficLinksCampaignDto {
//   @IsInt()
//   lprd_traffic_link_id: number;

  @IsString()
  @IsOptional()
  status?: string; 
}
