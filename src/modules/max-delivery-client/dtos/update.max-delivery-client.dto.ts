import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdateMaxDeliveryClientDto {
  @IsInt()
  @IsOptional()
  @IsPositive()
  client_id?: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  tid?: number;

  @IsInt()
  @IsOptional()
  max_delivery_percentage?: number;

  @IsInt()
  @IsOptional()
  active?: number;
}
