import { Repository, EntityManager } from 'typeorm';
import { LprdTrafficLinksClient } from './entities/clients.entity';
export declare class LprdTrafficLinksClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<LprdTrafficLinksClient>);
    createLprdTrafficLinkClient(values: Partial<LprdTrafficLinksClient>[], transactionalEntityManager: EntityManager): Promise<void>;
    deleteLprdTrafficLinkClientByTrafficLinkId(lprdTrafficLinkId: number, transactionalEntityManager: EntityManager): Promise<void>;
    deleteLprdTrafficLinkClient(removedElements: number[], lprdTrafficLinkId: number, transactionalEntityManager: EntityManager): Promise<void>;
}
