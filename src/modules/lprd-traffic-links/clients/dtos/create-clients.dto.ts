import { IsString, IsOptional } from 'class-validator';

export class CreateLprdTrafficLinksClientDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  description?: string;

  lprdTrafficLinkId: number;
}
