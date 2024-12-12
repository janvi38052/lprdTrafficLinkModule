import { IsInt,IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLprdTrafficLinksClientDto {
  @ApiProperty({ description: 'Client ID', example: 1 })
  @IsInt()
  @IsNotEmpty()
  client_id: number;

  @ApiProperty({ description: 'Traffic Link ID', example: 101 })
  @IsInt()
  @IsNotEmpty()
  lprd_traffic_link_id: number;
}

