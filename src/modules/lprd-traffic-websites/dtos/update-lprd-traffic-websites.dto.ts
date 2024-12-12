import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLprdTrafficWebsiteDto {
  @ApiProperty({
    description: 'The updated name of the LPRD traffic website',
    example: 'Updated Traffic Monitoring Website',
  })
  @IsNotEmpty()
  name: string;
}
