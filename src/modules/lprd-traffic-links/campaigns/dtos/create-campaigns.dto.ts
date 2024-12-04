import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateLprdTrafficLinksCampaignDto {


  @IsString()
  @IsOptional()
  status?: string; 
}
