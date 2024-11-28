import { IsNotEmpty } from "class-validator"
export class UpdateLprdTrafficWebsiteDto {
 
    @IsNotEmpty()
    name:string


  }
  