import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class CreateMaxDeliveryClientDto {
  @IsInt()
  @IsPositive()
  client_id: number;

  @IsInt()
  @IsPositive()
  tid: number;

  @IsInt()
  max_delivery_percentage: number;

  @IsInt()
  active: number;
}
