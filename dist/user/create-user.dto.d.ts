export declare class CreateUserDto {
    first_name?: string;
    last_name?: string;
    email_address: string;
    ref_user_id?: string;
    keycloak_id?: string;
    is_mfa_on?: boolean;
    is_mfa_verified?: number;
    client_id?: number;
}
