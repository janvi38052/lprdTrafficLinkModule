import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLprdTrafficSourceDto {
  @ApiPropertyOptional({
    description: 'The updated name of the LPRD traffic source',
    example: 'Updated Traffic Source A',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Updated maximum provider delivery percentage',
    example: 90,
  })
  @IsOptional()
  @IsNumber()
  max_provider_delivery_percentage?: number;
}
