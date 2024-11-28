import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    email_address: string;
    ref_user_id: string;
    keycloak_id: string;
    is_mfa_on: boolean;
    is_mfa_verified: number;
    client_id: number;
    lprdTrafficLinkUpdatedBy: LprdTrafficLinks[];
}
