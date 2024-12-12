import { ApiProperty } from '@nestjs/swagger';
import { IsOptional,IsString } from 'class-validator';

export class UpdateLprdTrafficLinksClientDto {
 
  @ApiProperty({ description: 'Name of the client', example: 'John Doe', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Email of the client', example: 'john.doe@example.com', required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ description: 'Description of the client', example: 'Some details about the client', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Traffic Link ID associated with the client', example: 101, required: false })
  @IsOptional()
  lprdTrafficLinkId?: number;
}