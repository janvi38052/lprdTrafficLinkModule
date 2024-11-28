import {Entity,Column,Index,PrimaryGeneratedColumn,OneToMany} from 'typeorm';
import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 30, nullable: true })
    first_name: string;
  
    @Column({ type: 'varchar', length: 30, nullable: true })
    last_name: string;
  
    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    @Index('EMAIL_ADDRESS')
    email_address: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    ref_user_id: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
    @Index('KEYCLOAK_ID')
    keycloak_id: string;
  
    @Column({ type: 'boolean', default: true })
    is_mfa_on: boolean;
  
    @Column({ type: 'smallint', default: 0 })
    is_mfa_verified: number;
  
    @Column({ type: 'int', nullable: true })
    client_id: number;
  
    @OneToMany(
      () => LprdTrafficLinks,
      (lprdTrafficLinkUpdatedBy) => lprdTrafficLinkUpdatedBy.updatedByUser,
    )
    lprdTrafficLinkUpdatedBy: LprdTrafficLinks[];
  }
  