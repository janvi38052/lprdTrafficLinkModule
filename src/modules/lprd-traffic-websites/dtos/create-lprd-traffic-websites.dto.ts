import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLprdTrafficWebsiteDto {
  @ApiProperty({
    description: 'The name of the LPRD traffic website',
    example: 'Traffic Monitoring Website',
  })
  @IsNotEmpty()
  name: string;
}
