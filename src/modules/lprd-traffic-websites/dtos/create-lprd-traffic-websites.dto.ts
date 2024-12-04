import { IsNotEmpty } from "class-validator"
export class CreateLprdTrafficWebsiteDto {


    @IsNotEmpty()
    name:string

  }
  