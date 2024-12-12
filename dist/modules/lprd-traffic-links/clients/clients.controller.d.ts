import { LprdTrafficLinksClientService } from './clients.service';
import { LprdTrafficLinksClient } from './entities/clients.entity';
import { EntityManager } from 'typeorm';
export declare class LprdTrafficLinksClientController {
    private readonly lprdTrafficLinksClientService;
    private readonly entityManager;
    constructor(lprdTrafficLinksClientService: LprdTrafficLinksClientService, entityManager: EntityManager);
    createTrafficLinkClient(values: Partial<LprdTrafficLinksClient> | Partial<LprdTrafficLinksClient>[]): Promise<{
        message: string;
    }>;
    deleteTrafficLinkClientByTrafficLinkId(lprdTrafficLinkId: number): Promise<{
        message: string;
    }>;
    deleteTrafficLinkClients(lprdTrafficLinkId: number, removedElements: number[]): Promise<{
        message: string;
    }>;
}
