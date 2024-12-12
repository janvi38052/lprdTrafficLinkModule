import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLprdTrafficLinksCampaignDto {
  @ApiPropertyOptional({ description: 'Status of the campaign', example: 'active' })
  @IsString()
  @IsOptional()
  status?: string;
}
