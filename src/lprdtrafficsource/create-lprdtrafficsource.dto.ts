import { IsString, IsNumber } from 'class-validator';

export class CreateLprdTrafficSourceDto {
  @IsString()
  name: string;

  @IsNumber()
  max_provider_delivery_percentage: number;
}
