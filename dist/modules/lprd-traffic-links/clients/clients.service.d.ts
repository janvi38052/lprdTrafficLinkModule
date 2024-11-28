import { Repository } from 'typeorm';
import { LprdTrafficLinksClient } from './entities/clients.entity';
import { CreateLprdTrafficLinksClientDto } from './dtos/create-clients.dto';
import { UpdateLprdTrafficLinksClientDto } from './dtos/update-clients.dto';
export declare class LprdTrafficLinksClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<LprdTrafficLinksClient>);
    create(data: CreateLprdTrafficLinksClientDto): Promise<LprdTrafficLinksClient>;
    findAll(): Promise<LprdTrafficLinksClient[]>;
    findOne(id: number): Promise<LprdTrafficLinksClient>;
    update(id: number, data: UpdateLprdTrafficLinksClientDto): Promise<LprdTrafficLinksClient>;
    remove(id: number): Promise<void>;
}
