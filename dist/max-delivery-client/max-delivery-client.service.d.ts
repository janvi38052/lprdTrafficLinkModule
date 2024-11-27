import { Repository } from 'typeorm';
import { MaxDeliveryClient } from './max-delivery-client.entity';
import { CreateMaxDeliveryClientDto } from './create-max-delivery-client.dto';
import { UpdateMaxDeliveryClientDto } from './update.max-delivery-client.dto';
export declare class MaxDeliveryClientService {
    private readonly maxDeliveryClientRepository;
    constructor(maxDeliveryClientRepository: Repository<MaxDeliveryClient>);
    create(data: CreateMaxDeliveryClientDto): Promise<MaxDeliveryClient>;
    findAll(): Promise<MaxDeliveryClient[]>;
    findOne(id: number): Promise<MaxDeliveryClient>;
    update(id: number, data: UpdateMaxDeliveryClientDto): Promise<MaxDeliveryClient>;
    remove(id: number): Promise<void>;
}
