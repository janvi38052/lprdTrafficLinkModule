import { Repository } from 'typeorm';
import { MaxDeliveryClient } from './entities/max-delivery-client.entity';
import { CreateMaxDeliveryClientDto } from './dtos/create-max-delivery-client.dto';
import { UpdateMaxDeliveryClientDto } from './dtos/update.max-delivery-client.dto';
export declare class MaxDeliveryClientService {
    private readonly maxDeliveryClientRepository;
    constructor(maxDeliveryClientRepository: Repository<MaxDeliveryClient>);
    create(data: CreateMaxDeliveryClientDto): Promise<MaxDeliveryClient>;
    findAll(): Promise<MaxDeliveryClient[]>;
    findOne(id: number): Promise<MaxDeliveryClient>;
    update(id: number, data: UpdateMaxDeliveryClientDto): Promise<MaxDeliveryClient>;
    remove(id: number): Promise<void>;
}
