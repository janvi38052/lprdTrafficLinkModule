import { Module } from '@nestjs/common';
import { LprdTrafficLinksClientService } from './clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksClient } from './entities/clients.entity';
import { LprdTrafficLinks } from '../entities/lprd-traffic-links.entity';
import { LprdTrafficLinksClientController } from './clients.controller';
;

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficLinksClient,LprdTrafficLinks])],
  providers: [LprdTrafficLinksClientService],
  controllers: [LprdTrafficLinksClientController],
  exports:[LprdTrafficLinksClientService]
})
export class LprdTrafficLinkClientsModule {}
