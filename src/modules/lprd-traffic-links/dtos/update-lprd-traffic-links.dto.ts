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
import { ApiProperty, PartialType } from '@nestjs/swagger';

class UpdateLprdTrafficLinkDto {
  @ApiProperty({
    description: 'ID of the traffic source',
    example: 1,
    required: false, 
  })
  @IsInt()
  @IsOptional()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  traffic_source_id?: number;

  @ApiProperty({
    description: 'ID of the traffic website',
    example: 1,
    required: false, 
  })
  @IsInt()
  @IsOptional()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  traffic_website_id?: number;

  @ApiProperty({
    description: 'Max provider delivery limit',
    example: 50,
    required: false, 
  })
  @IsOptional()
  @Min(1)
  @Max(100)
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  max_provider_delivery?: number;

  @ApiProperty({
    description: 'Locale for the traffic link',
    example: 'en-US',
    required: false, // Made optional for update
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
  @IsOptional()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  locale?: string;

  @ApiProperty({
    description: 'Approval status for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  approved?: number;

  @ApiProperty({
    description: 'Whether to ignore campaign active status',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  ignore_campaign_active_status?: number;

  @ApiProperty({
    description: 'Path style ID for the traffic link',
    example: 123,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  path_style_id?: number;

  @ApiProperty({
    description: 'Use radius range for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_radius_range?: number;

  @ApiProperty({
    description: 'Use IP blacklist for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_ip_blacklist?: number;

  @ApiProperty({
    description: 'Lock category for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  lock_category?: number;

  @ApiProperty({
    description: 'Use capping for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_capping?: number;

  @ApiProperty({
    description: 'Updated by user',
    example: 'admin',
    required: false, // Made optional for update
  })
  updated_by?: string;

  @ApiProperty({
    description: 'Bypass time-based capping for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  bypass_time_based_capping?: number;

  @ApiProperty({
    description: 'Block bots for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsBoolean()
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  block_bots?: number;

  @ApiProperty({
    description: 'Test traffic for the traffic link',
    example: true,
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsInt()
  @IsBoolean()
  test_traffic?: number;

  @ValidateIf((o) => o.test_traffic === 1)
  @ApiProperty({
    description: 'Percentage of test traffic',
    example: 30,
    required: false,
  })
  @Min(1)
  @Max(100)
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  test_traffic_percentage?: number;

  @ApiProperty({
    description: 'Tag for the traffic link',
    example: 'Special Campaign',
    required: false, // Made optional for update
  })
  @IsOptional()
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
  tag?: string;

  @ValidateIf((o) => o.lock_category === 0)
  @ApiProperty({
    description: 'Categories for the traffic link',
    example: [1, 2, 3],
    required: false, // Made optional for update
  })
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsOptional()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  categories?: number[];

  @ApiProperty({
    description: 'Clients for the traffic link',
    example: [101, 102],
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  clients?: number[];

  @ApiProperty({
    description: 'Campaigns for the traffic link',
    example: [201, 202],
    required: false, // Made optional for update
  })
  @IsOptional()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  campaigns?: number[];
}

export default UpdateLprdTrafficLinkDto;
