import { IsNotEmpty } from "class-validator"
export class CreateLprdTrafficWebsiteDto {
    // Add fields for creation if required


    @IsNotEmpty()
    name:string

  }
  