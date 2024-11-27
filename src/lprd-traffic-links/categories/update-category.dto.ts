import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateLprdTrafficLinksCategoryDto {
    
    @IsNotEmpty()
    name:string

  @IsInt()
  @IsOptional()
  lprd_traffic_link_id?: number;
}
