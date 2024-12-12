import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLprdTrafficLinksCampaignDto {
  @ApiPropertyOptional({ description: 'Updated status of the campaign', example: 'inactive' })
  @IsString()
  @IsOptional()
  status?: string;
}
