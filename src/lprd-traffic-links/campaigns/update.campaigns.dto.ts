import { IsInt, IsString, IsOptional } from 'class-validator';

export class UpdateLprdTrafficLinksCampaignDto {
//   @IsInt()
//   @IsOptional()
//   lprd_traffic_link_id?: number;

  @IsString()
  @IsOptional()
  status?: string;
}
