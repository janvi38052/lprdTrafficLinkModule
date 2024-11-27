import { LprdTrafficLinksClientService } from './clients.service';
import { CreateLprdTrafficLinksClientDto } from './create-clients.dto';
import { UpdateLprdTrafficLinksClientDto } from './update-clients.dto';
export declare class LprdTrafficLinksClientController {
    private readonly clientService;
    constructor(clientService: LprdTrafficLinksClientService);
    create(createDto: CreateLprdTrafficLinksClientDto): Promise<import("./clients.entity").LprdTrafficLinksClient>;
    findAll(): Promise<import("./clients.entity").LprdTrafficLinksClient[]>;
    findOne(id: number): Promise<import("./clients.entity").LprdTrafficLinksClient>;
    update(id: number, updateDto: UpdateLprdTrafficLinksClientDto): Promise<import("./clients.entity").LprdTrafficLinksClient>;
    remove(id: number): Promise<void>;
}
