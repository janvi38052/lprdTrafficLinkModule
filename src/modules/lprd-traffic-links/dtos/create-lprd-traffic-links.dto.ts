import { replaceMultipleSubstring } from 'src/utils/utils';
import { ErrorMessages } from 'src/utils/error-messages';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
  IsBoolean,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CreateLprdTrafficLinksDto {
  @ApiProperty({
    description: 'Traffic source ID',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  traffic_source_id: number;

  
  @IsString()
  updated_by: string;

  @ApiProperty({
    description: 'Traffic website ID',
    example: 2,
  })
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  traffic_website_id: number;

  @ApiPropertyOptional({
    description: 'Maximum provider delivery',
    example: 50,
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @Min(1)
  @Max(100)
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  max_provider_delivery: number;

  @ApiProperty({
    description: 'Locale of the traffic link',
    example: 'en-US',
  })
  @MinLength(2, {
    message: replaceMultipleSubstring(ErrorMessages.MIN_CHARACTERS_REQUIRED, {
      '{LENGTH}': 2,
    }),
  })
  @MaxLength(64, {
    message: replaceMultipleSubstring(ErrorMessages.MAX_CHARACTERS_REQUIRED, {
      '{LENGTH}': 64,
    }),
  })
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  locale: string;

  @ApiPropertyOptional({
    description: 'Approval status (1 for approved, 0 for not approved)',
    example: 1,
  })
  @IsOptional()
  @IsBoolean() // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  approved: number;

  @ApiPropertyOptional({
    description: 'Whether to ignore campaign active status (1 for true, 0 for false)',
    example: 0,
  })
  @IsOptional()
  @IsBoolean() 
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  ignore_campaign_active_status: number;

  @ApiPropertyOptional({
    description: 'Path style ID (1 for default, 0 for custom)',
    example: 1,
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  path_style_id: number;

  @ApiPropertyOptional({
    description: 'Whether to use radius range (1 for true, 0 for false)',
    example: 1,
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_radius_range: number;

  @ApiPropertyOptional({
    description: 'Whether to use IP blacklist (1 for true, 0 for false)',
    example: 0,
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_ip_blacklist: number;

  @ApiPropertyOptional({
    description: 'Whether to lock category (1 for locked, 0 for unlocked)',
    example: 0,
  })
  @IsOptional()
  @IsBoolean() 
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  lock_category: number;

  @ApiPropertyOptional({
    description: 'Whether to use capping (1 for true, 0 for false)',
    example: 1,
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_capping: number;

  @ApiPropertyOptional({
    description: 'Whether to bypass time-based capping (1 for true, 0 for false)',
    example: 0,
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  bypass_time_based_capping: number;

  @ApiPropertyOptional({
    description: 'Whether to block bots (1 for true, 0 for false)',
    example: 1,
  })
  @IsOptional()
  @IsBoolean() 
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  block_bots: number;

  @ApiPropertyOptional({
    description: 'Test traffic status (1 for test traffic, 0 for normal traffic)',
    example: 0,
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  test_traffic?: number;

  @ApiPropertyOptional({
    description: 'Test traffic percentage (only applies if test_traffic is 1)',
    example: 10,
  })
  @ValidateIf((o) => o.test_traffic === 1)
  @Min(1)
  @Max(100)
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  test_traffic_percentage: number;

  @ApiProperty({
    description: 'Tag associated with the traffic link',
    example: 'promotion1',
  })
  @MinLength(2, {
    message: replaceMultipleSubstring(ErrorMessages.MIN_CHARACTERS_REQUIRED, {
      '{LENGTH}': 2,
    }),
  })
  @MaxLength(64, {
    message: replaceMultipleSubstring(ErrorMessages.MAX_CHARACTERS_REQUIRED, {
      '{LENGTH}': 64,
    }),
  })
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  tag: string;

  @ApiPropertyOptional({
    description: 'Categories associated with the traffic link (if lock_category is 0)',
    example: [1, 2, 3],
  })
  @ValidateIf((o) => o.lock_category === 0)
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  categories: number[];

  @ApiPropertyOptional({
    description: 'Clients associated with the traffic link',
    example: [100, 200],
  })
  @IsOptional()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  clients: number[];

  @ApiPropertyOptional({
    description: 'Campaigns associated with the traffic link',
    example: [1000, 2000],
  })
  @IsOptional()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  campaigns: number[];
}

export default CreateLprdTrafficLinksDto;
