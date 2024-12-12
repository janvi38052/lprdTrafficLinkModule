import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class CreateMaxDeliveryClientDto {
   @ApiPropertyOptional({description:'Client Id'})
  @IsInt()
  @IsPositive()
  client_id: number;

  @ApiPropertyOptional({description:'tid'})
  @IsInt()
  @IsPositive()
  tid: number;

  @ApiPropertyOptional({description :'max_delivery_percentage'})
  @IsInt()
  max_delivery_percentage: number;

  @ApiPropertyOptional({description:'status'})
  @IsInt()
  active: number;
}
