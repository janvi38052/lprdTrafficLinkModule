import { LprdTrafficLinksClientService } from './clients.service';
import { CreateLprdTrafficLinksClientDto } from './dtos/create-clients.dto';
import { UpdateLprdTrafficLinksClientDto } from './dtos/update-clients.dto';
export declare class LprdTrafficLinksClientController {
    private readonly clientService;
    constructor(clientService: LprdTrafficLinksClientService);
    create(createDto: CreateLprdTrafficLinksClientDto): Promise<import("./entities/clients.entity").LprdTrafficLinksClient>;
    findAll(): Promise<import("./entities/clients.entity").LprdTrafficLinksClient[]>;
    findOne(id: number): Promise<import("./entities/clients.entity").LprdTrafficLinksClient>;
    update(id: number, updateDto: UpdateLprdTrafficLinksClientDto): Promise<import("./entities/clients.entity").LprdTrafficLinksClient>;
    remove(id: number): Promise<void>;
}
