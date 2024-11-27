import { IsInt, IsNotEmpty, IsString, IsOptional, IsArray, IsPositive, Min, Max } from 'class-validator';

export class CreateLprdTrafficLinksDto {
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  approved: number;

  // @IsInt()
  // @IsNotEmpty()
  // @IsPositive()
  // traffic_source_id: number;

  // @IsInt()
  // @IsNotEmpty()
  // @IsPositive()
  // traffic_website_id: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  max_provider_delivery: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  ignore_campaign_active_status: number;

  @IsString()
  @IsNotEmpty()
  locale: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  path_style_id: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  use_radius_range: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  use_ip_blacklist: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  lock_category: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  use_capping: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  bypass_time_based_capping: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  block_bots: number;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  test_traffic_percentage: number;

  @IsString()
  @IsNotEmpty()
  tag: string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  quality_score: number;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  category_ids: number[] | string; 

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  client_ids: number[] | string; 

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  campaigns_ids: number[] | string; 

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  maxDeliveryClient_ids: number[] | string; 

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  maxDeliveryCampaign_ids: number[] | string; 

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  trafficSource_ids: number[] | string; 

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  trafficWebsite_ids: number[] | string; 


  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  user_ids: number[] | string; 

}
