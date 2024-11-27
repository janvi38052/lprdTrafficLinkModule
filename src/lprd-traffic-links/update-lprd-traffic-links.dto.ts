import { IsInt, IsNotEmpty, IsString, IsEnum, IsOptional, Min, Max, IsPositive } from 'class-validator';
import { ConfidenceScore } from './lprd-traffic-links.entity';

export class UpdateLprdTrafficLinksDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  approved?: number;

  // @IsOptional()
  // @IsInt()
  // @IsPositive()
  // traffic_source_id?: number;

  // @IsOptional()
  // @IsInt()
  // @IsPositive()
  // traffic_website_id?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  max_provider_delivery?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  ignore_campaign_active_status?: number;

  @IsOptional()
  @IsString()
  locale?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  path_style_id?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  use_radius_range?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  use_ip_blacklist?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  lock_category?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  use_capping?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  bypass_time_based_capping?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  block_bots?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  test_traffic_percentage?: number;

  @IsOptional()
  @IsString()
  category_ids?: string;

  @IsOptional()
  @IsString()
  tag?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)
  quality_score?: number;
}
