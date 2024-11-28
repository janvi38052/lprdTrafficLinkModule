import { PartialType } from '@nestjs/mapped-types';
import { CreateMaxDeliveryClientDto } from 'src/modules/max-delivery-client/dtos/create-max-delivery-client.dto';
export class UpdateMaxDeliveryCampaignDto extends PartialType(CreateMaxDeliveryClientDto) {}
