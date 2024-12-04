import { IsInt, IsString, IsOptional } from 'class-validator';

export class UpdateLprdTrafficLinksCampaignDto {


  @IsString()
  @IsOptional()
  status?: string;
}
