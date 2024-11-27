import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateLprdTrafficSourceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  max_provider_delivery_percentage?: number;
}
