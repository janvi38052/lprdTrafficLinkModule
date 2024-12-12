import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsBoolean, IsInt } from 'class-validator';

export class CreateUserDto {
  @ApiPropertyOptional({description : "First name of the user"})
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiPropertyOptional({description:'Last name of the user'})
  @IsOptional()
  @IsString()
  last_name?: string;

  @ApiProperty({description:'Email of the user'})
  @IsEmail()
  email_address: string;

  @ApiPropertyOptional({description:'Reference user ID'})
  @IsOptional()
  @IsString()
  ref_user_id?: string;

  @ApiPropertyOptional({description:'Whether MFA is enabled'})
  @IsOptional()
  @IsString()
  keycloak_id?: string;

  @ApiPropertyOptional({ description: 'Whether MFA is On', default: 0 })
  @IsOptional()
  @IsBoolean()
  is_mfa_on?: boolean;

  @ApiPropertyOptional({ description: 'Whether is_mfa_verified' })
  @IsOptional()
  @IsInt()
  is_mfa_verified?: number;

  @ApiPropertyOptional({ description: 'Client ID' })
  @IsOptional()
  @IsInt()
  client_id?: number;
}
