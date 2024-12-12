import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLprdTrafficSourceDto {
  @ApiProperty({
    description: 'The name of the LPRD traffic source',
    example: 'Traffic Source A',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Maximum provider delivery percentage',
    example: 85,
  })
  @IsNumber()
  max_provider_delivery_percentage: number;
}
