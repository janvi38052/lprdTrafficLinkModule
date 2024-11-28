import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateLprdTrafficLinksCategoryDto {
    
@IsNotEmpty()
 name:string

  @IsInt()
  @IsNotEmpty()
  lprd_traffic_link_id: number;
}
