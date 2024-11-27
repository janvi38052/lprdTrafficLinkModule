import { IsString, IsOptional } from 'class-validator';

export class UpdateLprdTrafficLinksClientDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  lprdTrafficLinkId?: number;
}
