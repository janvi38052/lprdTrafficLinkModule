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
  IsString // Replaced IsBooleanValue with IsBoolean
} from 'class-validator';

class CreateLprdTrafficLinksDto {
  @IsString() 
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  traffic_source_id: number;

  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  traffic_website_id: number;

  @IsOptional()
  @Min(1)
  @Max(100)
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  max_provider_delivery: number;

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

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  approved: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  ignore_campaign_active_status: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  path_style_id: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_radius_range: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_ip_blacklist: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  lock_category: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  use_capping: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  bypass_time_based_capping: number;

  @IsOptional()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  block_bots: number;

  @IsOptional()
  @IsInt()
  @IsBoolean()  // Replaced IsBooleanValue with IsBoolean
  test_traffic?: number;

  @ValidateIf((o) => o.test_traffic === 1)
  @Min(1)
  @Max(100)
  @IsInt()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  test_traffic_percentage: number;

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
  tag: string;

  @ValidateIf((o) => o.lock_category === 0)
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  categories: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  clients: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty({ message: ErrorMessages.FIELD_REQUIRED })
  campaigns: number[];
}

export default CreateLprdTrafficLinksDto;