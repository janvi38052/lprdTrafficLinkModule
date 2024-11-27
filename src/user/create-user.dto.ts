import { IsEmail, IsOptional, IsString, IsBoolean, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsEmail()
  email_address: string;

  @IsOptional()
  @IsString()
  ref_user_id?: string;

  @IsOptional()
  @IsString()
  keycloak_id?: string;

  @IsOptional()
  @IsBoolean()
  is_mfa_on?: boolean;

  @IsOptional()
  @IsInt()
  is_mfa_verified?: number;

  @IsOptional()
  @IsInt()
  client_id?: number;
}
