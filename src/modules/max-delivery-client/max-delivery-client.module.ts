import { Module } from '@nestjs/common';
import { MaxDeliveryClientService } from './max-delivery-client.service';
import { MaxDeliveryClientController } from './max-delivery-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
import { MaxDeliveryClient } from './entities/max-delivery-client.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficLinks,MaxDeliveryClient])],
  providers: [MaxDeliveryClientService],
  controllers: [MaxDeliveryClientController],
  exports:[MaxDeliveryClientService]
})
export class MaxDeliveryClientModule {}
