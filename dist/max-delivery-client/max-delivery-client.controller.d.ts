import { MaxDeliveryClientService } from './max-delivery-client.service';
import { CreateMaxDeliveryClientDto } from './create-max-delivery-client.dto';
import { UpdateMaxDeliveryClientDto } from './update.max-delivery-client.dto';
export declare class MaxDeliveryClientController {
    private readonly maxDeliveryClientService;
    constructor(maxDeliveryClientService: MaxDeliveryClientService);
    create(createDto: CreateMaxDeliveryClientDto): Promise<import("./max-delivery-client.entity").MaxDeliveryClient>;
    findAll(): Promise<import("./max-delivery-client.entity").MaxDeliveryClient[]>;
    findOne(id: number): Promise<import("./max-delivery-client.entity").MaxDeliveryClient>;
    update(id: number, updateDto: UpdateMaxDeliveryClientDto): Promise<import("./max-delivery-client.entity").MaxDeliveryClient>;
    remove(id: number): Promise<void>;
}
